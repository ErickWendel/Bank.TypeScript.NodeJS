"use strict";
var Banco = require('./database/banco');
console.log(Banco.funcionarios.filter(funcionario => funcionario.tipoFuncionario == 0));
