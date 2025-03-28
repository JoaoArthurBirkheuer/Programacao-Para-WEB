const Categoria = require("../entities/categoria");
const { pool } = require('../config'); 

const getCategoriasDB = async () => {
    try{
        const results = await pool.query('SELECT * FROM categorias ORDER BY codigo');
        return results.rows.map(categoria => new Categoria(categoria.codigo, categoria.nome));
    }
    catch(err){
        throw "Erro ao consultar categorias" + err;
  };
}

  const addCategoriaDB = async (body) => {
    try {
        const { nome } = body;
        const results = await pool.query(`INSERT INTO categorias (nome) VALUES ($1) RETURNING codigo, nome`, [nome]);
        const categoria = results.rows[0];
        return new Categoria(categoria.codigo, categoria.nome);
    }
    catch(err){
        throw "Erro ao inserir categoria" + err;
    }
  }

  const updateCategoriaDB = async ({ codigo, nome }) => {
    try {
        const results = await pool.query(
            `UPDATE categorias SET nome = $1 WHERE codigo = $2 RETURNING codigo, nome`, 
            [nome, codigo]
        );

        if (results.rowCount === 0) {
            throw `Nenhuma categoria encontrada com o código ${codigo}`;
        }

        const categoria = results.rows[0];
        return new Categoria(categoria.codigo, categoria.nome);
    } catch (err) {
        throw "Erro ao alterar categoria: " + err;
    }
};

  const deleteCategoriaDB = async (codigo) => {
    try {
        const results = await pool.query(`DELETE FROM categorias WHERE codigo = $1`, [codigo]);
        if(results.rowCount === 0){
            throw `Nenhuma categoria encontrada com o código ${codigo} para ser deletada`;
        }
        else{
            return "Categoria deletada com sucesso";
        }
    }
    catch(err){
        throw "Erro ao deletar categoria" + err;
    }
  }

  const getCategoriaPorCodigoDB = async (codigo) => {
    try {
        const results = await pool.query(`SELECT * FROM categorias WHERE codigo = $1`, [codigo]);
        if(results.rowCount === 0){
            throw `Nenhuma categoria encontrada com o código ${codigo}`;
        }
        else{
            const categoria = results.rows[0];
            return new Categoria(categoria.codigo, categoria.nome);
        }
    }
    catch(err){
        throw "Erro ao recuperar categoria" + err;
    }
  }
  
  module.exports = { getCategoriasDB, addCategoriaDB, updateCategoriaDB, deleteCategoriaDB, getCategoriaPorCodigoDB };
  