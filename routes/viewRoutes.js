const express = require('express');
const { shortenUrl } = require('../controllers/apiController');
const router = express.Router();
const viewController = require('../controllers/viewController');
// render index page
router.get('/',viewController.indexPage);

router.get('/:code',viewController.redirectShortenUrl);

module.exports = router;