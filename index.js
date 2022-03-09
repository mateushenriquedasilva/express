const express = require("express");
// instaciar o express
const app = express();
// port
const port = 3000;

/*  Vincule middlewares de nível
do aplicativo a uma instância 
do objeto app usando as funções 
app.use() e app.METHOD(), onde 
METHOD é o método HTTP da solicitação 
que a função de middleware 
manipula (como GET, PUT, ou POST) 
em letras minúsculas.*/

// url é opcional
/* app.get('url', (req, res)) */

// use - all
app.get('/get', (req, res) => {
  res.send("<h2>Start🌑</h2>");
});

// carregar o express
app.listen(port, () => {
  console.log(`Executado na porta ${port}...`);
});