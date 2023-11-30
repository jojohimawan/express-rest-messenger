import express from 'express';
import roomController from '../controllers/room.js'

const route = express.Router();

route.get('/all', roomController.getAllRooms);
route.get('/enrolled/:user_id', roomController.getEnrolledRooms);
route.get('/hosted/:user_id', roomController.getHostedRooms);
route.get('/:id', roomController.getRoom);
route.post('/create', roomController.createRoom);
route.post('/enroll', roomController.enrollRoom);
route.delete('/delete/:id', roomController.deleteRoom);

export default route;