CREATE DATABASE express_knowledge;
USE express_knowledge;

CREATE TABLE instruccion(
  id INT(11) AUTO_INCREMENT PRIMARY KEY;
  instruccion VARCHAR(100) NOT NULL,
  descripcion TEXT,
  lenguaje VARCHAR(20) NOT NULL
);
