const express = require('express');
const app = express();
const porta = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname+'/public/'));

app.get('/',(req, res) =>{
    res.render('pages/index')
});


app.get('/login',(req, res) =>{
    res.render('pages/login')
});

app.get('/servicos',(req, res) =>{
    res.render('pages/servicos')
});

app.listen(porta,(req, res) => {
    console.log(`Servidor funcionando: ${porta}`)
})