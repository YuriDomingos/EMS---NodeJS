/*
 @Autor : Yuri Domingos
 Data   : 19 - 10 - 2021
 Objectivo : Construir um sistema 
*/

// 


const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./Server/database/connection');
// referência para os arquivos estaticos
const PORT = process.env.PORT || 8080;
const application = express();

/*

*/
application.use(bodyparser.urlencoded({extended:true}));

// set view engine
application.set("view engine", "ejs");
application.use('/css', express.static(path.resolve(__dirname,'assets/css')));
application.use('/js', express.static(path.resolve(__dirname, 'assets/js')));


dotenv.config({ path:'config.env'});

// log requests  
application.use(morgan('tiny'));

// Databe connection to our application 
connectDB();

// load systems routes 
application.use('/', require('./Server/Routes/router'));


application.listen(PORT, ()=>
{
   console.log(` Servidor rodando na porta http://localhost:${PORT}`)
});



