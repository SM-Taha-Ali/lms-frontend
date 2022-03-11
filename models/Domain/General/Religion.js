const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReligionSchema = new Schema({
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

const Religion = mongoose.model('religion', ReligionSchema)

module.exports = Religion;
