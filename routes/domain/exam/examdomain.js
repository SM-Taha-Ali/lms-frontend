const express = require('express');
const router = express.Router();

const examdomainController = require('../../../controllers/domain/exam/examdomain.js');


router.post(
    '/add-examdomain',
    examdomainController.addexamdomain
)

router.get(
    '/get-examdomain',
    examdomainController.getexamdomain
)

router.put(
    '/update-examdomain',
    examdomainController.updateexamdomain
)

router.delete(
    '/delete-examdomain',
    examdomainController.deleteexamdomain
)

module.exports = router