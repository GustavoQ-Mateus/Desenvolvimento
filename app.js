const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao !</h1>");
});

app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!</h1>");
});

app.get("/consulta/:parametro", function(req,res){
    res.send("retorno consulta:" + req.params.parametro);
});

app.get("/cadastro/{:nome}", function(req,res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
});

app.listen(process.env.PORT ?? 3000,function(erro){
    if (erro){
        console.log("Erro Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
});