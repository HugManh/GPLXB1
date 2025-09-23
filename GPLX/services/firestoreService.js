// src/services/firestoreService.js
import { collection, doc, getDoc, getDocs, query, orderBy, limit, startAfter, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// Lấy items theo page
export const getSignItemsPage = async (colName, pageSize = 10, lastDoc = null) => {
    const itemsRef = collection(db, "signs", colName, "items");
    let q = query(itemsRef, orderBy("name"), limit(pageSize));

    if (lastDoc) {
        q = query(itemsRef, orderBy("name"), startAfter(lastDoc), limit(pageSize));
    }

    const snapshot = await getDocs(q);
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // lastDoc dùng cho page tiếp theo
    const lastVisible = snapshot.docs[snapshot.docs.length - 1] || null;

    return { items, lastVisible };
};

// Lấy tất cả loại sign (có thể dùng pageSize và cursor nếu cần)
export const getAllSignsPage = async (pageSize = 10, cursors = {}) => {
    const signTypes = ["ban", "command", "danger", "instruction"];
    const result = {};

    for (const type of signTypes) {
        const { items, lastVisible } = await getSignItemsPage(type, pageSize, cursors[type] || null);
        result[type] = { items, lastVisible };
    }

    return result;
};

// Lấy 1 item theo type và id
export const getSignItemById = async (type, id) => {
    try {
        const docRef = doc(db, "signs", type, "items", id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) return null;
        return { id: docSnap.id, ...docSnap.data() };
    } catch (err) {
        console.error("Error fetching sign item:", err);
        throw err;
    }
};

// Cập nhật 1 item
export const updateSignItemById = async (type, id, data) => {
    try {
        const docRef = doc(db, "signs", type, "items", id);
        await updateDoc(docRef, data);
    } catch (err) {
        console.error("Error updating sign item:", err);
        throw err;
    }
};
