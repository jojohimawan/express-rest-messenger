import dotenv from 'dotenv';
import express from 'express';
import db from './config/database.js'
import userRoutes from './routes/user.js';
import messageRoutes from './routes/message.js';

const app = express();
dotenv.config();

app.use(express.json());
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