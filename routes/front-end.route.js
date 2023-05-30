const express = require('express');
const router = express.Router();
const frontEnd = require('../controllers').frontEnd;

router.get('/', frontEnd.getAllFrontEndDetails);

module.exports = router;