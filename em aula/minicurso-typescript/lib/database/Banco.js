"use strict";
var TipoFuncionario = require('./../entidades/enums/TipoFuncionario');
class Database {
    static findAll() {
        let secretariasList = this.getSecretarias();
        let gerentesList = this.getGerentes();
        let funcionariosList = [];
        secretariasList
            .forEach(secretaria => funcionariosList.push(secretaria));
        gerentesList.forEach(gerente => funcionariosList.push(gerente));
        return funcionariosList;
    }
    static getSecretarias() {
        this.secretarias = [
            {
                nome: "Xuxa da Silva",
                cpf: "123123",
                peitos: 100,
                salario: 3000,
                tipoFuncionario: TipoFuncionario.SECRETARIA
            },
            {
                nome: "Luiz da Silva",
                cpf: "123123",
                peitos: 100,
                salario: 3000,
                tipoFuncionario: TipoFuncionario.SECRETARIA
            }, {
                nome: "Afrodite da Silva",
                cpf: "123123",
                peitos: 100,
                salario: 3000,
                tipoFuncionario: TipoFuncionario.SECRETARIA
            }, {
                nome: "Maria da Silva",
                cpf: "123123",
                peitos: 100,
                salario: 3000,
                tipoFuncionario: TipoFuncionario.SECRETARIA
            }
        ];
        return this.secretarias;
    }
    static getGerentes() {
        this.gerentes = [
            {
                nome: 'Joao',
                cpf: "123123123",
                salario: 100000,
                tipoFuncionario: TipoFuncionario.GERENTE
            },
            {
                nome: 'Manuel',
                cpf: "123123123",
                salario: 100000,
                tipoFuncionario: TipoFuncionario.GERENTE
            }, {
                nome: 'Erick',
                cpf: "123123123",
                salario: 100000,
                tipoFuncionario: TipoFuncionario.GERENTE
            }, {
                nome: 'Wendel',
                cpf: "123123123",
                salario: 100000,
                tipoFuncionario: TipoFuncionario.GERENTE
            }
        ];
        return this.gerentes;
    }
}
module.exports = Database;
//# sourceMappingURL=Banco.js.map