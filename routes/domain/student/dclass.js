const express = require('express');
const router = express.Router();

const dclassController = require('../../../controllers/domain/student/dclass.js');


router.post(
    '/add-dclass',
    dclassController.addDclass
)

router.get(
    '/get-dclass',
    dclassController.getDclass
)

router.put(
    '/update-dclass',
    dclassController.updateDclass
)

router.delete(
    '/delete-dclass',
    dclassController.deleteDclass
)

module.exports = router