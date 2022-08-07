const express = require ('express');
const app = express();

const port = 3000;
const mainRouter = require('./routers/main');

// Recursos estaticos

app.use(express.static('public'));


// Rutas

app.use('/', mainRouter);

app.listen( port, ()=>{console.log('Server running http://localhost:' + port)});