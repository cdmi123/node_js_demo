var express = require('express');
const multer = require('multer');
var router = express.Router();
var puzzle = require('../controller/puzzlecontroller');

//server.js
// SET STORAGE

router.get('/',puzzle.get_data);
router.post('/',puzzle.insert);


module.exports = router;