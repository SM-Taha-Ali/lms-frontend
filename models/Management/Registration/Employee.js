const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    inquiry: {
        type: String,
        required: true
    },
    gr_no: {
        type: String,
        required: true
    },
    join_date: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    f_name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    whatsApp: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    mother_tng: {
        type: String,
        required: true
    },
    blood_group: {
        type: String,
    },
    role: {
        type: String,
        required: true
    },
    martial_status: {
        type: String,
    },
    spouse_name: {
        type: String,
    },
    no_of_children: {
        type: String,
    },
    family_members:{
        type: String
    },
    curr_addr: {
        type: String,
        required: true
    },
    perm_addr: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    subject: {
        type: Array
    },
    class: {
        type: Array
    }

});

const Employee = mongoose.model('employee', EmployeeSchema)

module.exports = Employee;
