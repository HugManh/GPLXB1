// src/handlers/signsHandler.js
import * as firestoreService from "../services/firestoreService";

// Lấy tất cả loại sign, hỗ trợ pageSize và cursors cho paging
export const fetchSigns = async (pageSize = 10, cursors = {}) => {
    try {
        const signs = await firestoreService.getAllSignsPage(pageSize, cursors);
        return signs;
    } catch (error) {
        console.error("Error fetching signs:", error);
        return {};
    }
};

// Lấy 1 item theo id và type
export const fetchSignItem = async (type, id) => {
    try {
        console.log("Fetching sign item:", type, id);
        const item = await firestoreService.getSignItemById(type, id);
        return item;
    } catch (err) {
        console.error("Error fetching sign item:", err);
        return null;
    }
};

// Cập nhật 1 item
export const updateSign = async (type, id, data) => {
    try {
        await firestoreService.updateSignItemById(type, id, data);
    } catch (err) {
        console.error("Error updating sign:", err);
    }
};
