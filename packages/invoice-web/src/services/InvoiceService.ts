import type { FakturaType } from "@devorgpl/ksef-model-lib/xmlns/crd.gov.pl/wzor/2021/11/29/11089";
import {
 onChildAdded, onValue, push, ref, set,
} from "firebase/database";
import { db } from "../libs/firebase";

export interface InvoiceMeta {
    number: string,
    date: Date,
    from: string
}

export interface Invoice {
    data: FakturaType,
    meta: InvoiceMeta
}

export const InvoiceService = {
    async getAll(authx, callback): Promise<Invoice[]> {
        if (!authx.isSignedIn) {
            return [];
        }
        const { user } = authx;
        const dbRef = ref(db, `invoices/${user.uid}`);
        const invoices = [];
        await onValue(dbRef, callback, {
            onlyOnce: false,
          });
        return invoices;
    },

    async put(authx, inv: Invoice): Promise<void> {
        if (!authx.isSignedIn) {
            return;
        }
        const { user } = authx;
        const invoicesRef = push(ref(db, `invoices/${user.uid}`));
        await set(invoicesRef, inv);
    },
};
