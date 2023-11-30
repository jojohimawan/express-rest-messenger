import db from '../config/database.js';

const getAllUsers = async () => {
    try {
        const users = await db.any('SELECT * FROM pengguna');
        return users;
    } catch (err) {
        throw err;
    }
};

const getUser = async (id) => {
    try {
        const user = await db.one('SELECT * FROM pengguna WHERE id = $1', id);
        return user;
    } catch (err) {
        throw err;
    }
};

const createUser = async (name, password) => {
    try {
        await db.none('INSERT INTO pengguna (nama, password) VALUES ($1, $2)', [name, password]);
    } catch (err) {
        throw err;
    }
};

const updateUser = async (id, name) => {
    try {
        await db.none('UPDATE pengguna SET nama = $1 WHERE id = $2', [name, id]);
    } catch (err) {
        throw err;
    }
};

const deleteUser = async (id) => {
    try {
        await db.none('DELETE FROM pengguna WHERE id = $1', id);
    } catch (err) {
        throw err;
    }
};

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}