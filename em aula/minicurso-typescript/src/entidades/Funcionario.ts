"use strict";
//subimos para memoria 
//a referencia da inteface

//ONP

import IFuncionario = require("./interfaces/Funcionario");

class Funcionario implements IFuncionario{
    public nome:string;
    public cpf: string;
    //FORMAS DE PROPRIEDADE
    // public cpf: string;
    // constructor(public nome: string) {}
    
    //para passar parametros no construtor
    //sem o public, para criar propriedade     
    // constructor( nome: string) {}
    //DA UMA GOOGLADA pra saber como transpilar para es6
    // get nome ():string {}
        
    public salario: number;
    public tipoFuncionario: number;
    
     retornarBonificacao():number {
        return this.salario * 0.10;
    }
}


export = Funcionario;