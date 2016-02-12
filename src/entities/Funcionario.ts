"use strict";
import IFuncionario = require('./interfaces/Funcionario');
class Funcionario implements IFuncionario {
    
    public id: number;
    public nome: string;
    public salario: number;
    public tipoFuncionario: number;
    
    retornarBonificacao (): number {
        
        return this.salario * 0.10;
    }
}
export = Funcionario;