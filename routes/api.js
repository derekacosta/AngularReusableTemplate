'use strict';

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

// mongoose.connect('mongodb://localhost/templateApp');

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.end(JSON.stringify({ message: "Welcome to my template API" }));
});

module.exports = router;
