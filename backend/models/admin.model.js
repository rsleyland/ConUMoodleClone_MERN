import mongoose from 'mongoose';
import User from './user.model.js'

const AdminSchema = mongoose.Schema({

    admin_id: {
        type: String,
        required: false
    }
});

export default User.discriminator("admin", AdminSchema);