const express = require('express');
const app = express();
const cors = require('cors');
const rotas = require('./routes/rotas');

app.use(cors()); // Mova o CORS para cima
app.use(express.json());
app.use(rotas);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
