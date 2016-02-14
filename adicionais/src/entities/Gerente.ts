"use strict";

import Funcionario = require('./Funcionario');
class Gerente extends Funcionario {
    public senha: number;
    
    retornarBonificacao(): number  {
        return this.salario * 0.30;
    }
}  
Object.seal(Gerente);
export = Gerente ;
