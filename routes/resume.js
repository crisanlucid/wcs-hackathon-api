var express = require('express');
var router = express.Router();
var listResumes = require('../config/resumes_list.json')

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.json(listResumes);
});


module.exports = router;