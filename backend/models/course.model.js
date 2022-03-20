import mongoose from 'mongoose';

const CourseSchema = mongoose.Schema({

    department: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Types.ObjectId, ref: 'instructor',
        required: true,
    },
    students: [{
        type: mongoose.Types.ObjectId, ref: 'student',
        required: false
    }],
    announcements: [{type: String, required: false}]
}, { timestamps : true}
);

export default mongoose.model("Course", CourseSchema);