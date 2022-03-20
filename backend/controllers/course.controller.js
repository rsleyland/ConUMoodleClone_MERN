import Course from '../models/course.model.js';
import Instructor from '../models/instructor.model.js';
import Student from '../models/student.model.js';
import mongoose from 'mongoose';
const ObjectID = mongoose.Types.ObjectId;



const returnAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(400).json("Could not retrieve courselist");
    }
    
};

const returnCourseByID = async (req, res) => {
    try {
        const courseID = req.params.cid;
        const course = await Course.findById(courseID);
        if (course){
            res.status(200).json(course);
        }
        else res.status(400).json("No Course with that ID");
    } catch (error) {
        res.status(400).json("Could not retrieve course");
    }
    
};


const returnAllStudentsInCourse = async (req, res) => {
    try {
        const courseID = req.params.cid;
        const course = await Course.findById(courseID);
        if (course){
            const studentIDS = course.students;
            let students = [];
            // for (let i in studentIDS) {
            //     students.push(await Student.findById(studentIDS[i]));
            // }
            res.status(200).json(studentIDS);
        }
        else res.status(400).json("No Course with that ID");
    } catch (error) {
        res.status(400).json("Could not retrieve students");
    }
    
};

const returnAllCoursesOfStudent = async (req, res) => {
    try {
        const studentID = req.body.userID;
        const student = await Student.findById(studentID);
        if (student){
            const courses = await Course.find({students: {$all: [ ObjectID(studentID) ] }}, { _id: 1, department: 1, code: 1 });
            res.status(200).json(courses);
        }
        else res.status(400).json("No Student with that ID");
    } catch (error) {
        res.status(400).json({message: "Could not retrieve courses", err: error.message});
    }
    
};




const addNewCourse = async (req, res) => {

    const course = await Course.create(req.body);
    res.json(course);
};

const deleteCourse = async (req, res) => {
    try {
        const courseID = req.params.cid;
        const course = await Course.findById(courseID);
        if (course) {
            course.delete();
            res.status(200).json("Course Deleted")
        }
        else res.status(400).json("No Course with that ID")
    } catch (error) {
        res.status(400).json("Bad Course ID")
    }
};




const getInstructor = async (req, res) => {
    try {
        const courseID = req.params.cid;
        const course = await Course.findById(courseID);
        if (course) {
            const instructor = await Instructor.findById(course.instructor);
            res.status(200).json(instructor)
        }
        else res.status(400).json("No Course with that ID")
    } catch (error) {
        res.status(400).json("Bad Course ID")
    }
};



export { returnAllCourses, addNewCourse, getInstructor, deleteCourse, 
    returnAllStudentsInCourse, returnAllCoursesOfStudent, returnCourseByID };

