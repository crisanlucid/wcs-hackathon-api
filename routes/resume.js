var express = require('express');
var router = express.Router();

/* GET categories listing. */

router.get('/', function(req, res, next) {
  return res.json(['data']);
});
