const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/Management/Registration/Users')
const Student = require('../models/Management/Registration/Student')
const Employee = require('../models/Management/Registration/Employee')

const JWT_SECRET = "clix123#p$rO"

async function registerStudent(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        const errors = validationResult(req);
        console.log(errors)
        // Checking if validations are fulfilled
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).json({ success, error: "Sorry student already exists." })
        }
        // Creating user by using create method of mongoose model
        let student = await Student.create({
            inquiry: req.body.inquiry,
            gr_no: req.body.gr_no,
            ref: req.body.ref,
            reg_date: req.body.reg_date,
            name: req.body.name,
            contact: req.body.contact,
            whatsApp: req.body.whatsApp,
            email: req.body.email,
            gender: req.body.gender,
            dob: req.body.dob,
            pob: req.body.pob,
            pob: req.body.pob,
            religion: req.body.religion,
            nationality: req.body.nationality,
            mother_tng: req.body.mother_tng,
            blood_group: req.body.blood_group,
            BformNo: req.body.BformNo,
            f_name: req.body.f_name,
            f_contact: req.body.f_contact,
            f_cnic: req.body.f_cnic,
            f_email: req.body.f_email,
            qualification: req.body.qualification,
            occupation: req.body.occupation,
            company: req.body.company,
            designation: req.body.designation,
            m_name: req.body.m_name,
            m_contact: req.body.m_contact,
            m_cnic: req.body.m_cnic,
            m_email: req.body.m_email,
            m_qualification: req.body.m_qualification,
            m_occupation: req.body.m_occupation,
            m_company: req.body.m_company,
            m_designation: req.body.m_designation,
            g_name: req.body.g_name,
            g_contact: req.body.g_contact,
            g_cnic: req.body.g_cnic,
            g_email: req.body.g_email,
            g_qualification: req.body.g_qualification,
            g_occupation: req.body.g_occupation,
            g_company: req.body.g_company,
            g_designation: req.body.g_designation,
            curr_addr: req.body.curr_addr,
            perm_addr: req.body.perm_addr,
            country: req.body.country,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            area: req.body.area,
            postal_code: req.body.postal_code,
            prev_inst: req.body.prev_inst,
            prev_class: req.body.prev_class,
            prev_inst_addr: req.body.prev_inst_addr,
            leaving_reason: req.body.leaving_reason,
        })
        user = await User.create({
            username: req.body.username,
            password: req.body.password,
            student: student._id,
            status: req.body.status,
        });
        // Sending the user object as a response
        success = true
        res.json(student._id);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(success, error)
    }

}

async function registerEmployee(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        const errors = validationResult(req);
        console.log(errors)
        // Checking if validations are fulfilled
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).json({ success, error: "Sorry employee already exists." })
        }
        // Creating user by using create method of mongoose model
        let employee = await Employee.create({
            inquiry: req.body.inquiry,
            gr_no: req.body.gr_no,
            join_date: req.body.join_date,
            jobType: req.body.jobType,
            dept: req.body.dept,
            designation: req.body.designation,
            name: req.body.name,
            f_name: req.body.f_name,
            contact: req.body.contact,
            whatsApp: req.body.whatsApp,
            email: req.body.email,
            cnic: req.body.cnic,
            gender: req.body.gender,
            dob: req.body.dob,
            religion: req.body.religion,
            nationality: req.body.nationality,
            mother_tng: req.body.mother_tng,
            blood_group: req.body.blood_group,
            role: req.body.role,
            martial_status: req.body.martial_status,
            spouse_name: req.body.spouse_name,
            no_of_children: req.body.no_of_children,
            family_members: req.body.family_members,
            curr_addr: req.body.curr_addr,
            perm_addr: req.body.perm_addr,
            country: req.body.country,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            area: req.body.area,
            postal_code: req.body.postal_code,
            subject: req.body.subject,
            class: req.body.class
        })
        user = await User.create({
            username: req.body.username,
            password: req.body.password,
            employee: employee._id,
            status: req.body.status,
        })
        // Sending the user object as a response
        success = true
        res.json(employee._id);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(success, error)
    }

}

async function updateEmployee(req, res) {
    try {
        let item = await Employee.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const subject  = req.body.subject;
        const classes  = req.body.class;
        const newItem = {};
        if (subject) { newItem.subject = subject }
        if (classes) { newItem.class = classes }
        item = await Employee.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function loginAuth(req, res) {
    let success = false;
    try {
        const { username, password } = req.body;
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ success, error: "Invalid Username or Password" })
        }
        let pwd = await User.findOne({ password });
        if (!pwd) {
            return res.status(400).json({ success, error: "Invalid Username or Password" })
        }
        // Sending the user object as a response
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true
        res.json({ success, authToken, user_status: user.status });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function getUserStudent(req, res) {
    try {
        var userID = req.body.std_id;
        const user = await User.find({ student: userID });
        res.send(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function getUser(req, res) {
    try {
        var userID = req.user.id;
        const user = await User.findById(userID);
        res.send(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function getUserEmployee(req, res) {
    try {
        var userID = req.body.emp_id;
        const user = await User.find({ employee: userID });
        res.send(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function getStudents(req, res) {
    try {
        const students = await Student.find();
        res.json(students);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function getEmployees(req, res) {
    try {
        const employees = await Employee.find();
        res.json(employees);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function getSubjectEmployee(req, res) {
    try {
        const employees = await Employee.find({ "subject": {$in: req.body.subject} });
        res.json(employees);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateRole_Status(req, res) {
    try {
        let item = await User.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const { status } = req.body;
        const { role } = req.body;
        const newItem = {};
        if ("boolean" === typeof (status)) { newItem.status = status }
        if (role) { newItem.role = role }
        item = await User.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}


module.exports = {
    registerStudent,
    registerEmployee,
    getStudents,
    getEmployees,
    getUserEmployee,
    getUserStudent,
    loginAuth,
    updateEmployee,
    getSubjectEmployee,
    getUser
}