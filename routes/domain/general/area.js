const express = require('express');
const router = express.Router();

const areaController = require('../../../controllers/domain/general/area.js');


router.post(
    '/add-area',
    areaController.addarea
)

router.get(
    '/get-area',
    areaController.getarea
)

router.put(
    '/update-area',
    areaController.updatearea
)

router.delete(
    '/delete-area',
    areaController.deletearea
)

module.exports = router