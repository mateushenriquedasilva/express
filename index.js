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

// função middleware

// o next chama a próxima função
app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

// use - all
app.get("/", (req, res, next) => {
  console.log("Durante...");
  res.json({
    data: [
      { id: 7, name: "Ana", position: 1 },
      { id: 34, name: "Bia", position: 2 },
      { id: 17, name: "Carlos", position: 3 },
    ],

    count: 3,
  });

  next()

  // res.send("<h2>Start🌑</h2>");

  // res.json({
  //     name: 'iPad 32g',
  //     price: 1899.00,
  //     discount: 0.12
  // })
});

app.use((req, res ) => {
    console.log("Depois...");
  });

// carregar o express
app.listen(port, () => {
  console.log(`Executado na porta ${port}...`);
});
