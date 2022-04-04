import {
 child, get, onValue, orderByChild, push, query, ref, set, Unsubscribe,
} from "firebase/database";
import { db } from "../libs/firebase";

export interface Contact {
    dbid?: string,
    companyName: string,
    vatNumber: string,
    street: string,
    city: string,
    postalCode: string,
}
export const ContactsService = {
    getAll(authx, callback): Unsubscribe {
        if (!authx.isSignedIn) {
            return () => {};
        }
        const { user } = authx;
        const dbRef = ref(db, `contacts/${user.uid}`);
        const orderedRef = query(dbRef, orderByChild('companyName'));
        const invoices = [];
        return onValue(orderedRef, callback, {
            onlyOnce: false,
        });
    },

    async getOne(authx, id): Promise<Contact> {
        if (!authx.isSignedIn) {
            return null;
        }
        const { user } = authx;
        const snapshot = await get(child(ref(db), `contacts/${user.uid}/${id}`));
        if (snapshot.exists()) {
            const val = snapshot.val();
            return val;
        }
        return null;
    },

    async put(authx, inv: Contact): Promise<void> {
        if (!authx.isSignedIn) {
            return;
        }
        const toPutInv = inv;
        const { user } = authx;
        const invoicesRef = push(ref(db, `contacts/${user.uid}`));
        await set(invoicesRef, toPutInv);
    },
};
