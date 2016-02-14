"use strict";
// precisamos instalar o tsd globalmente
//para subir o intellisense e definicoes
//do nodejs, inicializamos nossa pasta
// npm init -> informar projeto nodejs
//tsd init -> projeto typescript
// tsd query node --a install --save

//precisamos criar um arquivo 
//chamado tsconfig.json -> para informar nossa configuracao
// nodeJS para importar um lib de fora usamos o require 
// -> antes -> var express = require('node-modulo');
// -> agora -> import express = require('node-module);

//nosso de configuracao definimos 
// modulo runtime -> COMMONJS
// a versao alvo do Javascript -> ECS3
// Definimos a pasta de saida desses arquivos
// watch -> para OBERSERVAR as alteracoes e 
//recompilar
class Init {
    
    /**
     * Nosso Helloword
     */
    //ASSINATURA -> 
    // Nome
    // parametros é nome : type, 
    // tipo do retorno
    helloWorld (nome: string): string {
        return `Hello: ${nome}`;
    }
    
}
//ao fim da nossa classe, executamos
//nosso metodo.
let mensagem: string = new Init()
    .helloWorld(" Zina da Silva 12 ");
console.log(mensagem);

/// --> chamadas 
import Database = require('./database/Banco');
import Secretaria = require('./entidades/Secretaria');
import Funcionario = require('./entidades/Funcionario');
let funcionarios = Database.findAll();

let secretarias = funcionarios
    .filter(funcionario2 => funcionario2.tipoFuncionario == 2 );
// console.log(funcionarios);

console.log(secretarias);