var express = require('express');
var router = express.Router();
var category = require('../controller/categorycontroller');

router.get('/',category.get_data);
router.post('/',category.insert);


module.exports = router;