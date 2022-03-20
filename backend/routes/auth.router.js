import express from "express";
const Router = express.Router();
import { login, register, activate } from '../controllers/auth.controller.js'



Router.post('/login', login);
Router.post('/register', register);
Router.get('/activate/:code', activate);




export default Router;