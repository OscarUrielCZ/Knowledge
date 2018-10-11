var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Home' });
});

router.get('/js', (req, res) => {
    res.render('');
});

module.exports = router;
