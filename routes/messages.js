var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res, next){
    res.render('index');
});

module.exports = router;