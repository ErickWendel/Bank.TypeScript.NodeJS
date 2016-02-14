var Funcionario = require("./Funcionario");
class Gerente extends Funcionario {
    retornarBonificacao() {
        return this.salario * 0.50;
    }
}
module.exports = Gerente;
//# sourceMappingURL=Gerente.js.map