const express = require('express');
const router = express.Router();

const bd = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Home' });
});

router.get('/js', (req, res) => {
  bd.query('SELECT instruccion, descripcion FROM instruccion WHERE lenguaje="js"', (err, result) => {
    if(err)
      console.log('Error en GET /js ', err);
    else
      res.render('instruccion', { titulo: 'JavaScript', instrucciones: result });
  });
});

router.get('/py', (req, res) => {
  bd.query('SELECT instruccion, descripcion FROM instruccion WHERE lenguaje="py"', (err, result) => {
    if(err)
      console.log('Error en GET /py ', err);
    else
      res.render('instruccion', { titulo: 'Python', instrucciones: result });
  });
});

router.get('/java', (req, res) => {
  bd.query('SELECT instruccion, descripcion FROM instruccion WHERE lenguaje="java"', (err, result) => {
    if(err)
      console.log('Error en GET /java ', err);
    else
      res.render('instruccion', { titulo: 'Java', instrucciones: result });
  });
});

router.post('/nueva_sentencia', (req, res) => {
  var datos = {
    instruccion: req.body.instruccion,
    descripcion: req.body.descripcion,
    lenguaje: req.body.lenguaje
  };
  bd.query('INSERT INTO instruccion SET ?', datos, (err, result) => {
    if(err)
      console.log('Error en POST /nueva_sentencia', err);
    else {
      res.redirect(`/${datos.lenguaje}`);
    }
  });
});

module.exports = router;
