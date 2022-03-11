const express = require('express');
const router = express.Router();

const subBindController = require('../../../controllers/domain/student/subBind.js');


router.post(
    '/add-subBind',
    subBindController.addsubBind
)

router.get(
    '/get-subBind',
    subBindController.getsubBind
)


router.post(
    '/get-subOnlyBind',
    subBindController.getsubOnlyBind
)

router.put(
    '/update-subBind',
    subBindController.updatesubBind
)

router.delete(
    '/delete-subBind',
    subBindController.deletesubBind
)

module.exports = router