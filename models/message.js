import db from "../config/database.js";

const getAllMessages = async () => {
    try {
        const messages = await db.any('SELECT * FROM chat');
        return messages;
    } catch (err) {
        throw err;
    }
};

const getMessagesFromUser = async (sender_id) => {
    try {
        const messages = await db.any('SELECT * FROM chat WHERE sender_id = $1', sender_id);
        return messages;
    } catch (err) {
        throw err;
    }
};

const createMessage = async (room_id, sender_id, pesan, is_deleted) => {
    try {
        await db.none('INSERT INTO chat (room_id, sender_id, pesan, is_deleted) VALUES ($1, $2, $3, $4)', [room_id, sender_id, pesan, is_deleted]);
    } catch (err) {
        throw err;
    }
};

const updateMessage = async (pesan, id) => {
    try {
        await db.none('UPDATE chat SET pesan = $1 WHERE id = $2', [pesan, id]);
    } catch (err) {
        throw err;
    }
};

const deleteMessage = async (id) => {
    try {
        await db.none('UPDATE chat SET is_deleted = true WHERE id = $1', id)
    } catch (err) {
        throw err;
    }
};

const getMessagebByRoomId = async (room_id) => {
    try {
        const messages = await db.any('SELECT * FROM chat WHERE room_id = $1', room_id);
        return messages;
    } catch (err) {
        throw err;
    }
};

export default {
    getAllMessages,
    getMessagesFromUser,
    createMessage,
    updateMessage,
    deleteMessage,
    getMessagebByRoomId
}