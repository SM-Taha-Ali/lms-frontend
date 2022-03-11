const mongoose = require('mongoose');
const { Schema } = mongoose;

const CountrySchema = new Schema({
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

const Country = mongoose.model('country', CountrySchema)

module.exports = Country;
