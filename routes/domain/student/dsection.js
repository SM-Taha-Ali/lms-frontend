const express = require('express');
const router = express.Router();

const dsectionController = require('../../../controllers/dsection.js');


router.post(
    '/add-dsection',
    dsectionController.addDsection
)

router.get(
    '/get-dsection',
    dsectionController.getDsection
)

router.put(
    '/update-dsection',
    dsectionController.updateDsection
)

router.delete(
    '/delete-dsection',
    dsectionController.deleteDsection
)

module.exports = router