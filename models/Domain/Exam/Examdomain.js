const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExamdomainSchema = new Schema({
    value: {
        type: String,
        unique: true,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

const Examdomain = mongoose.model('examdomain', ExamdomainSchema)

module.exports = Examdomain;
