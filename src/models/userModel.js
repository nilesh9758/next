import mongoose from "momgoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isVerified : {
        type: Boolean,
        default : false,
    },
    isAdmin : {
        type: Boolean,
        default : false,
    },   
});

const User = mongoose.model('User', userSchema);

module.exports = User;