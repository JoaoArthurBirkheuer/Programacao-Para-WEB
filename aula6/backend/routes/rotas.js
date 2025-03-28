const express = require('express');
const router = express.Router();
const rotasCategorias = require('./rotasCategorias');

console.log('Rotas importadas:', rotasCategorias);

router.use('/categorias', rotasCategorias);

module.exports = router;
