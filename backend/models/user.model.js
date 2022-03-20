import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    activation: {
        activated:{type: Boolean, default: false },
        code:{type: String}
    }
}, { timestamps : true}
);

export default mongoose.model("User", UserSchema);