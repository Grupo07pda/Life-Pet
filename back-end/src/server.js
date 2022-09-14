
const express = require('express');
const usuarioRoute = require('../src/routes/routes')
const cors = require("cors")
const app = express();
const porta= 3000
require('dotenv/config')

app.use(cors());
app.use(express.json());
app.use(usuarioRoute);



app.listen(porta, ()=>{
    console.log("Deu bom!!!!")
})