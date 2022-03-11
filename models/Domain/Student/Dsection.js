const mongoose = require('mongoose');
const { Schema } = mongoose;

const DsectionSchema = new Schema({
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

const Dsection = mongoose.model('dsection', DsectionSchema)

module.exports = Dsection;
