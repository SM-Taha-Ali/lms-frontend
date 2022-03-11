const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProvinceSchema = new Schema({
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

const Province = mongoose.model('province', ProvinceSchema)

module.exports = Province;
