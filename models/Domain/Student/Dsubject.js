const mongoose = require('mongoose');
const { Schema } = mongoose;

const DsubjectSchema = new Schema({
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
    }
});

const Dsubject = mongoose.model('dsubject', DsubjectSchema)

module.exports = Dsubject;
