import express from 'express';
import authController from '../controllers/auth.js'

const route = express.Router();

route.post('/login', authController.login);
route.post('/register', authController.register)

export default route;