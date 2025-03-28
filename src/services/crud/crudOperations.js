import { ref, push, remove, update, get } from "firebase/database";
import { db } from "../../firebase/config";

// Create - Insertar nuevo registro
export const insertRecord = async (path, data) => {
    try {
        const reference = ref(db, path);
        const newRecord = await push(reference, data);
        return { success: true, id: newRecord.key };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Read - Obtener registros
export const getRecords = async (path) => {
    try {
        const reference = ref(db, path);
        const snapshot = await get(reference);
        if (snapshot.exists()) {
            return { success: true, data: snapshot.val() };
        }
        return { success: true, data: {} };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Update - Actualizar registro
export const updateRecord = async (path, id, data) => {
    try {
        const reference = ref(db, `${path}/${id}`);
        await update(reference, data);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Delete - Borrar registro
export const deleteRecord = async (path, id) => {
    try {
        const reference = ref(db, `${path}/${id}`);
        await remove(reference);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};