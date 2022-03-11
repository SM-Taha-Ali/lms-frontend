const express = require('express');
const router = express.Router();

const provinceController = require('../../../controllers/domain/general/province.js');


router.post(
    '/add-province',
    provinceController.addprovince
)

router.get(
    '/get-province',
    provinceController.getprovince
)

router.put(
    '/update-province',
    provinceController.updateprovince
)

router.delete(
    '/delete-province',
    provinceController.deleteprovince
)

module.exports = router