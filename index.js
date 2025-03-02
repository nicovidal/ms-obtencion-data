const express=require('express')
const {dbConnection}=require('./database/config');
require('dotenv').config();


//server express

const app=express();



dbConnection();

//listen petition
app.listen(process.env.PORT,()=>{
    console.log(`Servidor ok ${process.env.PORT}`)
});


//read and parse body
app.use(express.json());

//rutas
app.use('/api/data',require('./routes/persona'));