const mongoose = require('mongoose');
const { Schema } = mongoose;

const AreaSchema = new Schema({
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

const Area = mongoose.model('area', AreaSchema)

module.exports = Area;
