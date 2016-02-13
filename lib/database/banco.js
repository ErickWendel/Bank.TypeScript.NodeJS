"use strict";
var TIPO_FUNCIONARIO = require('./../entities/enums/TipoFuncionario');
class DataBase {
    static get secretarias() {
        let secretarias = [
            { codigoAcesso: 1111, id: 1, nome: 'Marcia', salario: 3000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1112, id: 2, nome: 'Judite', salario: 3000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1113, id: 3, nome: 'Rafaela', salario: 3000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1114, id: 4, nome: 'Jessica', salario: 4000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1115, id: 5, nome: 'Amanda', salario: 4000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1116, id: 6, nome: 'Mariana', salario: 4000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1116, id: 7, nome: 'Juliana', salario: 4000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1117, id: 8, nome: 'Judith', salario: 3000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1118, id: 9, nome: 'Janaina', salario: 3000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1119, id: 10, nome: 'Leticia', salario: 3000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
            { codigoAcesso: 1110, id: 11, nome: 'Camila', salario: 31000, tipoFuncionario: TIPO_FUNCIONARIO.Secretaria },
        ];
        return secretarias;
    }
    static get gerentes() {
        let gerentes = [
            { senha: 1111, id: 1, nome: 'Erick Wendel', salario: 13000, tipoFuncionario: TIPO_FUNCIONARIO.Gerente },
            { senha: 3111, id: 1, nome: 'Josue', salario: 14000, tipoFuncionario: TIPO_FUNCIONARIO.Gerente },
            { senha: 4111, id: 1, nome: 'Bruce', salario: 15000, tipoFuncionario: TIPO_FUNCIONARIO.Gerente },
            { senha: 5111, id: 1, nome: 'Gabriel', salario: 11000, tipoFuncionario: TIPO_FUNCIONARIO.Gerente },
            { senha: 6111, id: 1, nome: 'Renato', salario: 13000, tipoFuncionario: TIPO_FUNCIONARIO.Gerente },
            { senha: 77111, id: 1, nome: 'Zina da Silva', salario: 13000, tipoFuncionario: TIPO_FUNCIONARIO.Gerente },
            { senha: 1811, id: 1, nome: 'Jose', salario: 10000, tipoFuncionario: TIPO_FUNCIONARIO.Gerente }
        ];
        return gerentes;
    }
    static get funcionarios() {
        let gerentes = this.gerentes;
        let secretarias = this.secretarias;
        var funcionarios = new Array();
        gerentes.forEach((gerente) => funcionarios.push(gerente));
        secretarias.forEach((secretaria) => funcionarios.push(secretaria));
        return funcionarios;
    }
}
Object.seal(DataBase);
module.exports = DataBase;
//# sourceMappingURL=banco.js.map