# Codelines

Codelines es una aplicación web que guarda sentencias o instrucciones de tres lenguajes de programación en específico: JavaScript, Python y Java. La información se guarda en una base de datos mysql. El servidor utiliza nodejs y expressjs, las vistas se muestran con el motor de plantillas ejs.

Página de inicio
![Página de inicio](https://raw.githubusercontent.com/OscarUrielCZ/codelines/master/githubassets/inicio.png)
Agregar instruciones
![Página para agregar instrucciones](https://raw.githubusercontent.com/OscarUrielCZ/codelines/master/githubassets/instrucciones.png)
## Requerimientos

Tener instalado mysql, nodejs y npm.

## Instalación

Desde el cliente de mysql correr los comandos de database/codigo.sql, posterior a ello escribir tu nombre de usuario y contraseña en routes/db.js. Despúes deberás instalar las dependencias necesarias con el comnado:
```
npm install
``` 
Y levanta el servidor con:
```
npm start
```
Con eso podras ir a tu navegador y entrar a http://localhost:3000