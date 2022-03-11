const express = require('express');
const router = express.Router();

const batchesController = require('../../../controllers/management/batches/batches.js');


router.post(
    '/add-batches',
    batchesController.addbatches
)

router.get(
    '/get-batches',
    batchesController.getbatches
)

router.put(
    '/update-batches',
    batchesController.updatebatches
)

router.delete(
    '/delete-batches',
    batchesController.deletebatches
)

module.exports = router