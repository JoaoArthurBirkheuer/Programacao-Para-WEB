const { Router } = require('express');
const { getCategoriasDB, addCategoriaDB, deleteCategoriaDB, updateCategoriaDB, getCategoriaPorCodigoDB } = require('../controllers/categoriaController');

const rotasCategorias = Router();

rotasCategorias.route('/') 
    .get(getCategoriasDB)
    .post(addCategoriaDB); 

rotasCategorias.route('/:codigo') 
    .get(getCategoriaPorCodigoDB)
    .delete(deleteCategoriaDB)
    .put(updateCategoriaDB);

module.exports = rotasCategorias;
