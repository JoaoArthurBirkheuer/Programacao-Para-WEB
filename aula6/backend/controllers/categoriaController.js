const { response } = require('express');
const { getCategoriasDB, addCategoriaDB, updateCategoriaDB, deleteCategoriaDB, getCategoriaPorCodigoDB } = require('../usecases/categoriaUseCases');

const getCategoriasDBHandler = async (req, res) => {
  try {
    const data = await getCategoriasDB();
    res.status(200).json(data); // Aqui usamos `res` para retornar a resposta JSON
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Erro ao consultar categorias'
    });
  }
};

const addCategoriaDBHandler = async (req, res) => {
  try {
    const data = await addCategoriaDB(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error
    });
  }
};

const updateCategoriaDBHandler = async (req, res) => {
    try {
      const { codigo } = req.params;  // Pega o codigo da URL (da rota '/:codigo')
      const data = await updateCategoriaDB({ ...req.body, codigo });  // Passa o codigo junto com o body (dados para atualizar)
      res.status(200).json(data);  // Retorna os dados atualizados com sucesso
    } catch (err) {
      res.status(400).json({
        status: 'error',
        message: err  // Caso ocorra algum erro, retorna o erro para o cliente
      });
    }
  };

const deleteCategoriaDBHandler = async (req, res) => {
  try {
    const data = await deleteCategoriaDB(req.params.codigo);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err
    });
  }
};

const getCategoriaPorCodigoDBHandler = async (req, res) => {
  try {
    const data = await getCategoriaPorIdDB(req.params.codigo);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err
    });
  }
};

module.exports = {
  getCategoriasDB: getCategoriasDBHandler,
  addCategoriaDB: addCategoriaDBHandler,
  updateCategoriaDB: updateCategoriaDBHandler,
  deleteCategoriaDB: deleteCategoriaDBHandler,
  getCategoriaPorCodigoDB: getCategoriaPorCodigoDBHandler
};
