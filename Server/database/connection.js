
/*
 Objectivo : Conectar 
*/
var util= require('util');
const mongoose = require('mongoose');
const URI = "mongodb+srv://admin:sucesso2021@cluster0.pd7c2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async()=>
{

    try{


        const con = await mongoose.connect(URI, {
            useNewUrlParser: true,
            
            useUnifiedTopology: true
             
        })

        console.log(` MongoDB connected : ${con.connection.host}`)
    }catch( err)
    {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;