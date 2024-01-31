var express = require('express');
const multer = require('multer');
var router = express.Router();
var puzzle = require('../controller/puzzlecontroller');

//server.js
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  var upload = multer({ storage: storage })

router.get('/',puzzle.get_data);
router.post('/',upload.single('p_image'),puzzle.insert);


module.exports = router;