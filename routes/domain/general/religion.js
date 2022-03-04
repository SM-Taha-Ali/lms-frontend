const express = require('express');
const router = express.Router();

const religionController = require('../../../controllers/domain/general/religion');


router.post(
  '/add-religion',
  religionController.addReligion
)

router.get(
  '/get-religion',
  religionController.getReligion
)

router.put(
  '/update-religion',
  religionController.updateReligion
)

router.delete(
    '/delete-religion',
    religionController.deleteReligion
)

module.exports = router