const express = require('express');
const servicoRoutes = express.Router();
const criarServico= require("../controllers/servicos/criarServico");
const pegarServico = require("../controllers/servicos/pegarServico");


servicoRoutes.post('/servico',criarServico);
servicoRoutes.get('/servico',pegarServico);

module.exports = servicoRoutes;