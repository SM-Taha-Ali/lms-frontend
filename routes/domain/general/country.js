const express = require('express');
const router = express.Router();

const countryController = require('../../../controllers/country');


router.post(
    '/add-country',
    countryController.addCountry
)

router.get(
    '/get-country',
    countryController.getCountry
)

router.put(
    '/update-country',
    countryController.updateCountry
)

router.delete(
    '/delete-country',
    countryController.deleteCountry
)

module.exports = router