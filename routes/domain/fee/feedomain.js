const express = require('express');
const router = express.Router();

const feedomainController = require('../../../controllers/domain/fee/feedomain.js');


router.post(
    '/add-feedomain',
    feedomainController.addFeedomain
)

router.get(
    '/get-feedomain',
    feedomainController.getFeedomain
)

router.put(
    '/update-feedomain',
    feedomainController.updateFeedomain
)

router.delete(
    '/delete-feedomain',
    feedomainController.deleteFeedomain
)

module.exports = router