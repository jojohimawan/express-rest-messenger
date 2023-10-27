import express from 'express';
import roomController from '../controllers/room.js'

const route = express.Router();

route.get('/all', roomController.getAllRooms);
route.get('/:id', roomController.getRoom);
route.post('/create', roomController.createRoom);
route.delete('/delete/:id', roomController.deleteRoom);

export default route;