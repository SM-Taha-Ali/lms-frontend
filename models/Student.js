const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    inquiry: {
        type: String,
        required: true
    },
    gr_no: {
        type: String,
        required: true
    },
    ref: {
        type: String,
        required: true
    },
    reg_date: {
        type: Date,
        required: true
    },
    name: {
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
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    pob: {
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
    BformNo: {
        type: String,
        required: true
    },
    f_name: {
        type: String,
        required: true
    },
    f_contact: {
        type: String,
        required: true
    },
    f_cnic: {
        type: String,
        required: true
    },
    f_email: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    m_name: {
        type: String,
        required: true
    },
    m_contact: {
        type: String,
        required: true
    },
    m_cnic: {
        type: String,
        required: true
    },
    m_email: {
        type: String,
        required: true
    },
    m_qualification: {
        type: String,
        required: true
    },
    m_occupation:{
        type: String,
        required: true
    },
    m_company:{
        type: String,
        required: true
    },
    m_designation: {
        type: String,
        required: true
    },
    g_name: {
        type: String,
        required: true
    },
    g_contact: {
        type: String,
        required: true
    },
    g_cnic: {
        type: String,
        required: true
    },
    g_email: {
        type: String,
        required: true
    },
    g_qualification: {
        type: String,
        required: true
    },
    g_occupation:{
        type: String,
        required: true
    },
    g_company:{
        type: String,
        required: true
    },
    g_designation: {
        type: String,
        required: true
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
    prev_inst: {
        type: String,
        required: true
    },
    prev_class: {
        type: String,
        required: true
    },
    prev_inst_addr: {
        type: String,
        required: true
    },
    leaving_reason: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('student',StudentSchema)

module.exports = Student;
