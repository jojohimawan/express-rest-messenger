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

const createRoom = async (host_id, room_name) => {
    try {
        await db.none('INSERT INTO room (host_id, room_name) VALUES ($1, $2)', [host_id, room_name]);
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

const getEnrolledRooms = async (user_id) => {
    try {
        const rooms = await db.any('SELECT room_member.*, room.room_name FROM room_member INNER JOIN room ON room_member.room_id = room.id WHERE room_member.member_id = $1', user_id);
        return rooms;
    } catch (err) {
        throw err;
    }
};

const getHostedRooms = async (user_id) => {
    try {
        const rooms = await db.any('SELECT * FROM room WHERE host_id = $1', user_id);
        return rooms;
    } catch (err) {
        throw err;
    }
};

const enrollRoom = async (room_id, member_id) => {
    try {
        await db.none('INSERT INTO room_member (room_id, member_id) VALUES ($1, $2)', [room_id, member_id]);
    } catch (err) {
        throw err;
    }
};

export default {
    getAllRooms,
    getRoom,
    createRoom,
    deleteRoom,
    getEnrolledRooms,
    getHostedRooms,
    enrollRoom
};