const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/json', (req, res) => {
  res.json({ nome: 'Matheus', idade: '26', cidade: 'São Paulo' });
});

app.get('/query', (req, res) => {
  const query = req.query; // Aqui, estamos pegando a query string da URL
  res.json(query);  // Envia a query como resposta em formato JSON, irá aparecer na tela
});





app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
