import type { FakturaType } from "@devorgpl/ksef-model-lib/xmlns/crd.gov.pl/wzor/2021/11/29/11089";
import {
 onValue, push, ref, set, Unsubscribe, get, child, query, orderByChild,
} from "firebase/database";
import { XMLParser } from 'fast-xml-parser';
import { db } from "../libs/firebase";

export interface InvoiceMeta {
    number: string,
    date: string,
    createDate?: string,
    orderingField?: number,
    from: string,
    amount: number,
    currency: string,
    dbid?: string,
}

export interface Invoice {
    data: FakturaType,
    meta: InvoiceMeta,
    raw: string
}

export const InvoiceService = {
    getAll(authx, callback): Unsubscribe {
        if (!authx.isSignedIn) {
            return () => {};
        }
        const { user } = authx;
        const dbRef = ref(db, `invoices/${user.uid}`);
        const orderedRef = query(dbRef, orderByChild('meta/orderingField'));
        const invoices = [];
        return onValue(orderedRef, callback, {
            onlyOnce: false,
        });
    },

    async getOne(authx, id): Promise<Invoice> {
        if (!authx.isSignedIn) {
            return null;
        }
        const { user } = authx;
        const snapshot = await get(child(ref(db), `invoices/${user.uid}/${id}`));
        if (snapshot.exists()) {
            const val = snapshot.val();
            val.data = new XMLParser().parse(val.raw);
            return val;
        }
        return null;
    },

    async put(authx, inv: Invoice): Promise<void> {
        if (!authx.isSignedIn) {
            return;
        }
        inv.meta.createDate = new Date().toISOString();
        inv.meta.orderingField = - (new Date().getTime());
        const { user } = authx;
        const invoicesRef = push(ref(db, `invoices/${user.uid}`));
        await set(invoicesRef, inv);
    },
};
