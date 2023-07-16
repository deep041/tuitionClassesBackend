const express = require('express');
const router = express.Router();
const kit = require('../controllers').kit;

router.post('/', kit.addKit);
router.get('/:id', kit.getStudentKitDetails);
router.patch('/', kit.updateKit);

module.exports = router;