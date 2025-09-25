// src/services/firestoreService.js
import { collection, doc, getDoc, getDocs, query, orderBy, limit, startAfter, updateDoc, addDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// Lấy items theo page
export const getSignItemsPage = async (colName, pageSize = 10, lastDoc = null) => {
    if (!colName) {
        throw new Error("getSignItemsPage: 'colName' is required");
    }

    const itemsRef = collection(db, "signs", colName, "items");
    const baseQuery = [orderBy("name"), limit(pageSize)];
    const q = lastDoc ? query(itemsRef, ...baseQuery, startAfter(lastDoc)) : query(itemsRef, ...baseQuery);

    const snapshot = await getDocs(q);
    const items = snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
    const lastVisible = snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null;

    return { items, lastVisible };
};

// Lấy tất cả loại sign (có thể dùng pageSize và cursor nếu cần)
export const getAllSignsPage = async (pageSize = 10, cursors = {}) => {
    const signTypes = ["ban", "command", "danger", "instruction"];

    const resultsArray = await Promise.all(
        signTypes.map(async (type) => {
            try {
                const cursor = cursors && cursors[type] ? cursors[type] : null;
                const { items, lastVisible } = await getSignItemsPage(type, pageSize, cursor);
                return { type, items, lastVisible };
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(`getAllSignsPage: failed to fetch type '${type}':`, error);
                return { type, items: [], lastVisible: null };
            }
        })
    );

    return resultsArray.reduce((acc, cur) => {
        acc[cur.type] = { items: cur.items, lastVisible: cur.lastVisible };
        return acc;
    }, {});
};

// Lấy 1 item theo type và id
export const getSignItemById = async (type, id) => {
    try {
        if (!type || !id) throw new Error("getSignItemById: 'type' and 'id' are required");
        const docRef = doc(db, "signs", type, "items", id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) return null;
        return { id: docSnap.id, ...docSnap.data() };
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error fetching sign item:", err);
        throw err;
    }
};

// Cập nhật 1 item
export const updateSignItemById = async (type, id, data) => {
    try {
        if (!type || !id) throw new Error("updateSignItemById: 'type' and 'id' are required");
        if (!data || typeof data !== 'object') throw new Error("updateSignItemById: 'data' must be an object");
        const docRef = doc(db, "signs", type, "items", id);
        await updateDoc(docRef, data);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error updating sign item:", err);
        throw err;
    }
};

export const createSignItem = async (type, data) => {
    try {
        if (!type) throw new Error("createSignItem: 'type' is required");
        if (!data || typeof data !== 'object') throw new Error("createSignItem: 'data' must be an object");
        const colRef = collection(db, "signs", type, "items");
        if (data.id) {
            const docRef = doc(colRef, String(data.id));
            await setDoc(docRef, data);
            return { id: String(data.id), ...data };
        }
        const docRef = await addDoc(colRef, data);
        return { id: docRef.id, ...data };
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error creating sign item:", err);
        throw err;
    }
};
