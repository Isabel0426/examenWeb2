const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app =  express();
const port= 3000;
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//route
app.use(require('./routers/routers'));

app.listen(port, ()=>{
    console.log( `corriendo por el puerto ${port} y en localhost`);
})