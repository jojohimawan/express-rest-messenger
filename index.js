import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from './config/database.js'
import userRoutes from './routes/user.js';
import messageRoutes from './routes/message.js';
import roomRoutes from './routes/room.js';
import memberRoutes from './routes/member.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();

app.use(express.json(), cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ info: 'Project UTS Semester 3 Pemrograman Framework' });
})

db.connect().then(obj => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is running on port ${process.env.SERVER_PORT}`);
    })
}).catch(error => {
    console.log('ERROR:', error.message || error);
})

app.use('/users', userRoutes);
app.use('/messages', messageRoutes);
app.use('/rooms', roomRoutes);
app.use('/members', memberRoutes);
app.use('/auth', authRoutes);