const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

// Importing controller

const authController = require('../controllers/auth');
const fetchuser = require('../middlewares/fetchUser');


// Register Student
router.post(
  // Route Path
  '/register-student',
  [
    body('inquiry', 'This field should not be empty').isLength(1),
    body('gr_no', 'This field should not be empty').isLength(1),
    body('ref', 'This field should not be empty').isLength(1),
    body('reg_date', 'This field should not be empty').isLength(1),
    body('name', 'This field should not be empty').isLength(1),
    body('contact', 'This field should not be empty').isLength(1),
    body('whatsApp', 'This field should not be empty').isLength(1),
    body('email', 'This field should not be empty').isLength(1),
    body('gender', 'This field should not be empty').isLength(1),
    body('dob', 'This field should not be empty').isLength(1),
    body('pob', 'This field should not be empty').isLength(1),
    body('religion', 'This field should not be empty').isLength(1),
    body('nationality', 'This field should not be empty').isLength(1),
    body('mother_tng', 'This field should not be empty').isLength(1),
    body('blood_group', 'This field should not be empty').isLength(1),
    body('BformNo', 'This field should not be empty').isLength(1),
    body('f_name', 'This field should not be empty').isLength(1),
    body('f_contact', 'This field should not be empty').isLength(1),
    body('f_cnic', 'This field should not be empty').isLength(1),
    body('f_email', 'This field should not be empty').isLength(1),
    body('qualification', 'This field should not be empty').isLength(1),
    body('occupation', 'This field should not be empty').isLength(1),
    body('company', 'This field should not be empty').isLength(1),
    body('designation', 'This field should not be empty').isLength(1),
    body('m_name', 'This field should not be empty').isLength(1),
    body('m_contact', 'This field should not be empty').isLength(1),
    body('m_cnic', 'This field should not be empty').isLength(1),
    body('m_email', 'This field should not be empty').isLength(1),
    body('m_qualification', 'This field should not be empty').isLength(1),
    body('m_occupation', 'This field should not be empty').isLength(1),
    body('m_company', 'This field should not be empty').isLength(1),
    body('m_designation', 'This field should not be empty').isLength(1),
    body('g_name', 'This field should not be empty').isLength(1),
    body('g_contact', 'This field should not be empty').isLength(1),
    body('g_cnic', 'This field should not be empty').isLength(1),
    body('g_email', 'This field should not be empty').isLength(1),
    body('g_qualification', 'This field should not be empty').isLength(1),
    body('g_occupation', 'This field should not be empty').isLength(1),
    body('g_company', 'This field should not be empty').isLength(1),
    body('g_designation', 'This field should not be empty').isLength(1),
    body('curr_addr', 'This field should not be empty').isLength(1),
    body('perm_addr', 'This field should not be empty').isLength(1),
    body('country', 'This field should not be empty').isLength(1),
    body('state', 'This field should not be empty').isLength(1),
    body('city', 'This field should not be empty').isLength(1),
    body('area', 'This field should not be empty').isLength(1),
    body('postal_code', 'This field should not be empty').isLength(1),
    body('username', 'This field should not be empty').isLength(1),
    body('password', 'This field should not be empty').isLength(1),
    body('role', 'This field should not be empty').isLength(1),
  ],
  // Creating User
  authController.registerStudent
)

// Register Employee
router.post(
  // Route Path
  '/register-employee',
  [
    body('inquiry', 'This field should not be empty').isLength(1),
    body('gr_no', 'This field should not be empty').isLength(1),
    body('join_date', 'This field should not be empty').isLength(1),
    body('jobType', 'This field should not be empty').isLength(1),
    body('dept', 'This field should not be empty').isLength(1),
    body('designation', 'This field should not be empty').isLength(1),
    body('name', 'This field should not be empty').isLength(1),
    body('f_name', 'This field should not be empty').isLength(1),
    body('contact', 'This field should not be empty').isLength(1),
    body('whatsApp', 'This field should not be empty').isLength(1),
    body('email', 'This field should not be empty').isLength(1),
    body('cnic', 'This field should not be empty').isLength(1),
    body('gender', 'This field should not be empty').isLength(1),
    body('dob', 'This field should not be empty').isLength(1),
    body('religion', 'This field should not be empty').isLength(1),
    body('nationality', 'This field should not be empty').isLength(1),
    body('mother_tng', 'This field should not be empty').isLength(1),
    body('blood_group', 'This field should not be empty').isLength(1),
    body('role', 'This field should not be empty').isLength(1),
    body('curr_addr', 'This field should not be empty').isLength(1),
    body('perm_addr', 'This field should not be empty').isLength(1),
    body('country', 'This field should not be empty').isLength(1),
    body('state', 'This field should not be empty').isLength(1),
    body('city', 'This field should not be empty').isLength(1),
    body('area', 'This field should not be empty').isLength(1),
    body('postal_code', 'This field should not be empty').isLength(1),
    body('username', 'This field should not be empty').isLength(1),
    body('password', 'This field should not be empty').isLength(1),
  ],
  // Creating User
  authController.registerEmployee
)


router.post(
  '/login', 
  authController.loginAuth
)


// Fetching user details
router.post(
  // Route Path
  '/get-user-student',
  // fetching user details
  authController.getUserStudent
)


// Fetching user details
router.post(
  // Route Path
  '/get-user',
  // Middleware
  fetchuser,
  // fetching user details
  authController.getUser
)

// Fetching user details
router.post(
  // Route Path
  '/get-user-employee',
  // fetching user details
  authController.getUserEmployee
)

// router.put(
//   '/updateuser',
//   authController.updateRole_Status
// )


// Fetching all students
router.get(
  // Route Path
  '/get-students',
  authController.getStudents
)

// Fetching all employees
router.get(
  // Route Path
  '/get-employees',
  authController.getEmployees
)

router.post(
  // Route Path
  '/get-subject-employee',
  authController.getSubjectEmployee
)

router.put(
  // Route Path
  '/get-update-employee',
  // fetching user details
  authController.updateEmployee
)



module.exports = router