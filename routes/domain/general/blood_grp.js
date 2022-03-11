const express = require('express');
const router = express.Router();

const bloodgroupController = require('../../../controllers/domain/general/bloodgroup.js');


router.post(
    '/add-bloodgroup',
    bloodgroupController.addbloodgroup
)

router.get(
    '/get-bloodgroup',
    bloodgroupController.getbloodgroup
)

router.put(
    '/update-bloodgroup',
    bloodgroupController.updatebloodgroup
)

router.delete(
    '/delete-bloodgroup',
    bloodgroupController.deletebloodgroup
)

module.exports = router