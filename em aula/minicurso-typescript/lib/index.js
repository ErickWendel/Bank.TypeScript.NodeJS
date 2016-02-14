"use strict";
class Init {
    helloWorld(nome) {
        return `Hello: ${nome}`;
    }
}
let mensagem = new Init()
    .helloWorld(" Zina da Silva 12 ");
console.log(mensagem);
var Database = require('./database/Banco');
let funcionarios = Database.findAll();
let secretarias = funcionarios
    .filter(funcionario2 => funcionario2.tipoFuncionario == 2);
console.log(secretarias);
//# sourceMappingURL=index.js.map