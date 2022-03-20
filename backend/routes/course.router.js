import express from "express";
const Router = express.Router();
import { returnAllCourses, addNewCourse, getInstructor, deleteCourse, returnAllStudentsInCourse,
    returnAllCoursesOfStudent, returnCourseByID } from '../controllers/course.controller.js'
import { adminOnly } from '../middlewares/auth.middleware.js';
import { setUserIDFromCookie } from '../middlewares/setUserIDFromCookie.middleware.js';



Router.get('/all', returnAllCourses);
Router.get('/id/:cid', returnCourseByID);
Router.get('/all-students-in/:cid', returnAllStudentsInCourse);
Router.get('/all-courses-for-student', setUserIDFromCookie, returnAllCoursesOfStudent);
Router.post('/add', adminOnly, addNewCourse);
Router.delete('/delete/:cid', adminOnly, deleteCourse);
Router.get('/get-instructor/:cid', getInstructor);




export default Router;