const express = require('express');
const router = express.Router();

const cityController = require('../../../controllers/domain/general/city.js');


router.post(
    '/add-city',
    cityController.addcity
)

router.get(
    '/get-city',
    cityController.getcity
)

router.put(
    '/update-city',
    cityController.updatecity
)

router.delete(
    '/delete-city',
    cityController.deletecity
)

module.exports = router