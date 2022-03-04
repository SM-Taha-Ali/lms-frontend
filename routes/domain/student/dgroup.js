const express = require('express');
const router = express.Router();

const dgroupController = require('../../../controllers/domain/student/dgroup.js');


router.post(
    '/add-dgroup',
    dgroupController.addDgroup
)

router.get(
    '/get-dgroup',
    dgroupController.getDgroup
)

router.put(
    '/update-dgroup',
    dgroupController.updateDgroup
)

router.delete(
    '/delete-dgroup',
    dgroupController.deleteDgroup
)

module.exports = router