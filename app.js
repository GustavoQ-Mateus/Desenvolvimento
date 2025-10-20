const express = require("express");
const server = express();

server.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
});

server.get("/itens", function(req,res){
    res.send("<h1>Capivara Lista!</h1>");
});

server.get("/consulta/:id", function(req,res){
    res.send("retorno consulta:" + req.params.id);
});

server.get("/cadastro/:nome?", function(req,res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
});

server.listen(process.env.PORT ?? 3000,function(erro){
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
});
