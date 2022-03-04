const express = require('express');
const router = express.Router();

const dsubgroupController = require('../../../controllers/domain/student/dsubgroup.js');


router.post(
    '/add-dsubgroup',
    dsubgroupController.addDsubgroup
)

router.get(
    '/get-dsubgroup',
    dsubgroupController.getDsubgroup
)

router.put(
    '/update-dsubgroup',
    dsubgroupController.updateDsubgroup
)

router.delete(
    '/delete-dsubgroup',
    dsubgroupController.deleteDsubgroup
)

module.exports = router