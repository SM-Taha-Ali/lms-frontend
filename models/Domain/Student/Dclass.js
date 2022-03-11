const mongoose = require('mongoose');
const { Schema } = mongoose;

const DclassSchema = new Schema({
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

const Dclass = mongoose.model('dclass', DclassSchema)

module.exports = Dclass;
