const express = require('express');
const apiController = require('../controllers/apiController');
const databaseController = require('../controllers/databaseController');
const router = express.Router();

router.post('/api/shorten-url', apiController.shortenUrl);

module.exports = router;