const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
    },
    status: {
        type: String,
        default: null
    }
});

const User = mongoose.model('user', UserSchema)

module.exports = User;
