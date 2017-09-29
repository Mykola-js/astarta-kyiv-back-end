var express = require('express');
var router = express.Router();
var user_name = require('./config.json').menu;
var date = require('./config.json')

router.get('/', function(req, res, next) {
    res.render('index', {});
   
});

module.exports = router;
