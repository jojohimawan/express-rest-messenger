import express from 'express';
import userController from '../controllers/user.js'

const route = express.Router();

route.get('/all', userController.getAllUsers);
route.get('/:id', userController.getUser);
route.post('/create', userController.createUser);
route.put('/update/:id', userController.updateUser);
route.delete('/delete/:id', userController.deleteUser);

export default route;