const express = require('express');
const router = express.Router();

const districtController = require('../../../controllers/domain/general/district.js');


router.post(
    '/add-district',
    districtController.adddistrict
)

router.get(
    '/get-district',
    districtController.getdistrict
)

router.put(
    '/update-district',
    districtController.updatedistrict
)

router.delete(
    '/delete-district',
    districtController.deletedistrict
)

module.exports = router