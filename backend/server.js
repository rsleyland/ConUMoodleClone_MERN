import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import 'dotenv/config';
import './db_connect.js';

const app = express();


// Middlewares
app.use(express.json()) //parse JSON data
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(cookieParser());


// routes
import authRouter from './routes/auth.router.js'
import courseRouter from './routes/course.router.js'
app.use('/api/auth',authRouter)
app.use('/api/course',courseRouter)


// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));