import mongoose from 'mongoose';
import User from './user.model.js'

const StudentSchema = mongoose.Schema({

    student_id: {
        type: String,
        required: false
    }
});

export default User.discriminator("student", StudentSchema);