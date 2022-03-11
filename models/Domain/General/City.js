const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitySchema = new Schema({
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

const City = mongoose.model('city', CitySchema)

module.exports = City;
