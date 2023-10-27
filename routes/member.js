import express from 'express';
import memberController from '../controllers/member.js';

const route = express.Router();

route.get('/all', memberController.getAllMembers);
route.get('/:room_id', memberController.getRoomMembers);
route.post('/create', memberController.createMember);
route.delete('/delete', memberController.deleteMember);

export default route;