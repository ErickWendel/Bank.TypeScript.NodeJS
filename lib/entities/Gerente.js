"use strict";
var Funcionario = require('./Funcionario');
class Gerente extends Funcionario {
    retornarBonificacao() {
        return this.salario * 0.30;
    }
}
Object.seal(Gerente);
module.exports = Gerente;
//# sourceMappingURL=Gerente.js.map