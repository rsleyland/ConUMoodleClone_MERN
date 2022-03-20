import User from '../models/user.model.js';
import Student from '../models/student.model.js';
import Instructor from '../models/instructor.model.js';
import Admin from '../models/admin.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendEmailConfirmation } from './email.controller.js';


// REQUIRES [req.body.email, req.body.password]
const login = async (req ,res) => {
    try {
        if (req.body.email.length === 0 || req.body.password.length === 0) {
            return res.status(400).json({message: "Failure - Missing fields"});
        }
        const user = await User.findOne({email: req.body.email});
        if (!user) {
           return res.status(400).json({message: "Failure - Email not registered"});
        }
        if (!user.activation.activated) return res.status(400).json({message: "Failure - User account not activated."});
        if (!await bcrypt.compare(req.body.password, user.password)){
            return res.status(400).json({message: "Failure - Incorrect password"});
        }

        const token = jwt.sign({_id: user._id},process.env.JWT_SECRET, {expiresIn: '30d'});
        const options = {
            httpOnly: true,
            expires: new Date(Date.now() + parseInt(process.env.EXPIRE_TOKEN)) 
        };
        res.status(200).cookie('token', token, options).json({ 
            firstname: user.firstname,
            email: user.email,
            type: user.__t
        });
        
    } catch (error) {
        res.status(400).json({message: "Failure - could not login user"});
    }
} 


// REQUIRES [req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.body.type] (type == 'student' || 'instructor' || 'admin')
const register = async (req ,res) => {
    try {
        if (req.body.firstname.length === 0 || req.body.lastname.length === 0 || req.body.email.length === 0 || req.body.password.length === 0 || req.body.type.length === 0) {
            return res.status(400).json({message: "Failure - missing fields"});
        }
        if (await User.findOne({email: req.body.email})) {
           return res.status(400).json({message: "Failure - email already registered"});
        }
        req.body.password = await bcrypt.hash(req.body.password, 10);
        let user = null
        switch (req.body.type) {
            case 'student' :
                user = await Student.create(req.body);
                break;
            case 'instructor' :
                user = await Instructor.create(req.body);
                break;
            case 'admin' :
                user = await Admin.create(req.body);
                break;
            default:
                return res.status(400).json({message: "Failure - incorrect user type given"});
        }

        if (!user) return res.status(400).json({message: "Failure - could not create user"});
        let code = crypto.randomBytes(32).toString('base64')
        code = code.replace('/', '+');
        user.activation.code = code;
        user.save();
        sendEmailConfirmation(user.email, user.firstname, code);

        res.status(201).json({message: "Success"});

    } catch (error) {
        res.status(400).json({message: "Failure - could not create user"});
    }
} 

const activate = async (req, res) => {
    try {
        const user = await User.findOne({activation: {activated: false, code: req.params.code}});
        if (!user) return res.status(400).json({message: "Failure - could not find user"});
        user.activation.activated = true;
        user.save();
        res.status(200).redirect('http://localhost:3000/login');
        
    } catch (error) {
        res.status(400).json({message: "Failure - could not activate user"});
    }
}

export { login, register, activate };