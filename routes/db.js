const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '241099oucz.',
  database: 'express_knowledge'
});

conexion.connect(error => {
  if(error)
    console.log("Error en la conexión a la BD.");
  else {
    console.log("Conexión exitosa.");
  }
});

module.exports = conexion;
