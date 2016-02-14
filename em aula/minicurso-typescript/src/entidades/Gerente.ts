import Funcionario = require("./Funcionario");
class Gerente extends Funcionario {
    //fizemos o OVERRIDE
    //a sobreescrita da classe pai 
    retornarBonificacao(): number {
        return this.salario * 0.50;
    }
}
export = Gerente;