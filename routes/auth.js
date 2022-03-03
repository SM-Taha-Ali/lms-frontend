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
  // Creating User
  authController.registerStudent
)

// Register Employee
router.post(
  // Route Path
  '/register-employee',
  // Creating User
  authController.registerEmployee
)


// router.post(
//   '/login',
//   [
//     body('email','Enter a valid email.').isEmail(),
//     body('password','Password cannot be blank.').exists(),
//   ], 
//   authController.loginAuth
// )


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



module.exports = router