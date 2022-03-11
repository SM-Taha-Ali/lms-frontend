const mongoose = require('mongoose');
const { Schema } = mongoose;

const BatchSchema = new Schema({
    batchname: {
        type: String,
        unique: true,
        required: true
    },
    subteafees: {
        type: Array,
        required: true
    },
    students: {
        type: Array
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
});

const Batch = mongoose.model('Batch', BatchSchema)

module.exports = Batch;
