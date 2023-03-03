var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/asd', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

module.exports = router;
