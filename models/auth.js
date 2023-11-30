import db from "../config/database.js";

const login = async (name, password) => {
    try {
        const login = await db.oneOrNone('SELECT id, nama FROM pengguna WHERE nama = $1 AND password = $2', [name, password]);
        return login;
    } catch (err) {
        throw err;
    }
}

const register = async (name, password) => {
    try {
        const existingUser = await db.oneOrNone('SELECT * FROM pengguna WHERE nama = $1', name)
        if(existingUser) {
            return existingUser;
        }

        await db.none('INSERT INTO pengguna (nama, password) VALUES ($1, $2)', [name, password])
    } catch (err) {
        throw err;
    }
}

export default {
    login,
    register
}