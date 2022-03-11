const mongoose = require('mongoose');
const { Schema } = mongoose;

const Mother_tngSchema = new Schema({
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

const Mother_tng = mongoose.model('mother_tng', Mother_tngSchema)

module.exports = Mother_tng;
