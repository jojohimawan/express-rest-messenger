import pgp from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const conn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}
const db = pgp()(conn);

export default db;