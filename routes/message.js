import express from 'express';
import messageController from '../controllers/message.js'

const route = express.Router();

route.get('/all', messageController.getAllMessages);
route.get('/:sender_id', messageController.getMessagesFromUser);
route.get('/room/:room_id', messageController.getMessagebByRoomId);
route.post('/create', messageController.createMessage);
route.patch('/update/:id', messageController.updateMessage);
route.delete('/delete/:id', messageController.deleteMessage);

export default route;