const express = require('express');
const router = express.Router();

const dsubjectController = require('../../../controllers/domain/student/dsubject.js');


router.post(
    '/add-dsubject',
    dsubjectController.addDsubject
)

router.get(
    '/get-dsubject',
    dsubjectController.getDsubject
)

router.put(
    '/update-dsubject',
    dsubjectController.updateDsubject
)

router.delete(
    '/delete-dsubject',
    dsubjectController.deleteDsubject
)

module.exports = router