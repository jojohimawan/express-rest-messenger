import db from "../config/database.js";

const getAllRooms = async () => {
    try {
        const rooms = await db.any('SELECT * FROM room');
        return rooms;
    } catch (err) {
        throw err;
    }
};

const getRoom = async (id) => {
    try {
        const room = await db.one('SELECT * FROM room WHERE id = $1', id);
        return room;
    } catch (err) {
        throw err;
    }
};

const createRoom = async (host_id) => {
    try {
        await db.none('INSERT INTO room (host_id) VALUES ($1)', host_id);
    } catch (err) {
        throw err;
    }
};

const deleteRoom = async (id) => {
    try {
        await db.none('DELETE FROM room WHERE id = $1', id);
    } catch (err) {
        throw err;
    }
};

export default {
    getAllRooms,
    getRoom,
    createRoom,
    deleteRoom
};