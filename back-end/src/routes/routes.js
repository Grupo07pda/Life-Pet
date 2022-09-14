const express= require('express');
const usuarioRoute = express.Router();

const criar= require('../controllers/usuarios/criar')
const pegar = require('../controllers/usuarios/pegar')
const alterar = require('../controllers/usuarios/alterar')
const deletar = require('../controllers/usuarios/deletar')
const login= require('../controllers/usuarios/login')

usuarioRoute.post("/usuario", criar);
usuarioRoute.get("/usuario", pegar);
usuarioRoute.put("/usuario/:id", alterar);
usuarioRoute.delete("/usuario/:id", deletar)
usuarioRoute.post("/login", login)

module.exports = usuarioRoute;  