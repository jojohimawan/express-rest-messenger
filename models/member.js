import db from '../config/database.js';

const getAllMembers = async () => {
    try {
        const members = await db.any('SELECT * FROM room_member');
        return members;
    } catch (err) {
        throw err;
    }
};

const getRoomMembers = async (room_id) => {
    try {
        const members = await db.any('SELECT * FROM room_member WHERE room_id = $1', room_id);
        return members;
    } catch (err) {
        throw err;
    }
};

const createMember = async (room_id, user_id) => {
    try {
        await db.none('INSERT INTO room_member (room_id, member_id) VALUES ($1, $2)', [room_id, user_id]);
    } catch (err) {
        throw err;
    }
};

const deleteMember = async (room_id, user_id) => {
    try {
        await db.none('DELETE FROM room_member WHERE room_id = $1 AND member_id = $2', [room_id, user_id]);
    } catch (err) {
        throw err;
    }
}

export default {
    getAllMembers,
    getRoomMembers,
    createMember,
    deleteMember
};