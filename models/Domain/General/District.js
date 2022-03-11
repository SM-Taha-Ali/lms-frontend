const mongoose = require('mongoose');
const { Schema } = mongoose;

const DistrictSchema = new Schema({
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

const District = mongoose.model('district', DistrictSchema)

module.exports = District;
