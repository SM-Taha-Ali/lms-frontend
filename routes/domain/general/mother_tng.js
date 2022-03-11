const express = require('express');
const router = express.Router();

const mother_tngController = require('../../../controllers/domain/general/mother_tng.js');


router.post(
    '/add-mother_tng',
    mother_tngController.addmother_tng
)

router.get(
    '/get-mother_tng',
    mother_tngController.getmother_tng
)

router.put(
    '/update-mother_tng',
    mother_tngController.updatemother_tng
)

router.delete(
    '/delete-mother_tng',
    mother_tngController.deletemother_tng
)

module.exports = router