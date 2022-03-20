import mongoose from 'mongoose';
import User from './user.model.js'

const InstructorSchema = mongoose.Schema({

    instructor_id: {
        type: String,
        required: false
    }
});

export default User.discriminator("instructor", InstructorSchema);