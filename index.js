const express = require("express");
// instaciar o express
const app = express();
// body parser
const bodyParser = require("body-parser");

// port
const port = 3000;

// middleware
const saudacao = require("./saudacaoMid");
app.use(saudacao("Matheus"));

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

app.use(bodyParser.text());
app.use(bodyParser.json());
// formulário
app.use(bodyParser.urlencoded({ extended: true }));

// o next chama a próxima função
app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

// Lendo Dados da Requisição
app.get("/clientes/relatorio", (req, res) => {
  // http://localhost:3000/clientes/relatorio?completo=true&ano=2018
  res.send(
    `Cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}`
  );
});

// corpo da requisição
app.post("/corpo", (req, res) => {
  // sem body parser
  //   let corpo = "";
  //   req.on("data", function (parte) {
  //     corpo += parte;
  //   });
  //   req.on("end", function (parte) {
  //     res.send(corpo);
  //   });
  //   com body parser

  //   res.send(req.body.nome);
  //   res.send(req.body);
  res.send(JSON.stringify(req.body));
});

// :id - pode mudar na url
app.get("/clientes/:id", (req, res) => {
  // enviar
  res.send(`Cliente ${req.params.id} selecionado!`);
  // tudo que vem da requisição fica em "params."
  // get: params na url
  // post: no corpo da requisição
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

  next();

  // res.send("<h2>Start🌑</h2>");

  // res.json({
  //     name: 'iPad 32g',
  //     price: 1899.00,
  //     discount: 0.12
  // })
});

app.use((req, res) => {
  console.log("Depois...");
});

// carregar o express
app.listen(port, () => {
  console.log(`Executado na porta ${port}...`);
});
