const express = require('express');
const router = express.Router();

const bd = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Home' });
});

router.get('/js', (req, res) => {
  bd.query('SELECT * FROM js', (err, result) => {
    if(err)
      console.log('Error en GET /js ', err);
    else
      res.render('instruccion', { titulo: 'JavaScript', instrucciones: result });
  });
});

router.post('/nueva_sentencia', (req, res) => {
  console.log(req.body);
  res.redirect('/js');
  //bd.query('INSERT INTO ? values ?');
});

module.exports = router;
