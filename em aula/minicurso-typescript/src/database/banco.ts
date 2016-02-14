//adiconamos o use strict 
//para utilizar o ECMAScript 6
"use strict";

//simulamos um banco de dados
//estático, de funcionarios
//subimos as nossas entidades para 
//memoria
import Secretaria = require('./../entidades/Secretaria');
import Gerente = require('./../entidades/Gerente');
import IFuncionario = require('./../entidades/Funcionario');
import TipoFuncionario = require('./../entidades/enums/TipoFuncionario');

class Database {
    public static funcionarios: Array<IFuncionario>;
    public static secretarias: Array<Secretaria>;
    public static gerentes: Array<Gerente>;
    
    //criamos membros estáticos para a classe
    //iformamos que o tipo do retorno é um Array TIPADO
    //com a INterface
    //esse é um recurso chamado GENERICS 
    //Onde passamos o tipo como parametro para receber exclusivamente aquele tipo
    static findAll(): Array<IFuncionario> {
	    let secretariasList = this.getSecretarias();
        let gerentesList = this.getGerentes();
        let funcionariosList: Array<IFuncionario> = [];
        // funcionariosList = 
        //PROBLEMA -> precimos adicionar todos funcionarios numa variavel
        //entrei na lista de secretarias e vou percorrer cada item
        //adiciono para o array de funcionarios.
        //[].foreach(function (item){ funcionariosList.push(item)})
        //1 -> funçao anonima 
        // => -> mesma coisa que colocasse uma funciont
        secretariasList
            .forEach(secretaria => funcionariosList.push(secretaria));
        //DELEGATES -> REFERENCIA DE MEMORIA PARA UMA FUNCAO
        //BASICAMENTE ENVIAR UMA FUNCAO PARA EXECUTADA FUTURAMENTE
        
        //LAMBDA -> É UM DELEGATE
        // LADO ESQUERDO RECEBE OS PARAMETROS
        //LADO DIREITO O QUE PRECISA FAZER
        // UM PARAMETRO GERENTE 
        // E DEPOIS DA ARROU A IMPLEMENTACAO 
        gerentesList.forEach(gerente => funcionariosList.push(gerente));
         
        return funcionariosList;
    }

    static getSecretarias(): Array<Secretaria> {

        this.secretarias = [
            //FAZEMOS UM CONVERT 
            //COM O TIPO DE DADOS  e ele desce as propriedades
            //usamos o enum para definir o tipo de funcionario
            <Secretaria>{
                nome: "Xuxa da Silva",
                cpf: "123123",
                peitos: 100,
                salario: 3000,
                tipoFuncionario: TipoFuncionario.SECRETARIA
            },
            <Secretaria>{
                nome: "Luiz da Silva",
                cpf: "123123",
                peitos: 100,
                salario: 3000,
                tipoFuncionario: TipoFuncionario.SECRETARIA
            }, <Secretaria>{
                nome: "Afrodite da Silva",
                cpf: "123123",
                peitos: 100,
                salario: 3000,
                tipoFuncionario: TipoFuncionario.SECRETARIA
            }, <Secretaria>{
                nome: "Maria da Silva",
                cpf: "123123",
                peitos: 100,
                salario: 3000,
                tipoFuncionario: TipoFuncionario.SECRETARIA
            }
        ];

        return this.secretarias;
    }

    static getGerentes(): Array<Gerente> {
        this.gerentes = [
            <Gerente>{
                nome: 'Joao',
                cpf: "123123123",
                salario: 100000,
                tipoFuncionario: TipoFuncionario.GERENTE
            },
            <Gerente>{
                nome: 'Manuel',
                cpf: "123123123",
                salario: 100000,
                tipoFuncionario: TipoFuncionario.GERENTE
            }, <Gerente>{
                nome: 'Erick',
                cpf: "123123123",
                salario: 100000,
                tipoFuncionario: TipoFuncionario.GERENTE
            }, <Gerente>{
                nome: 'Wendel',
                cpf: "123123123",
                salario: 100000,
                tipoFuncionario: TipoFuncionario.GERENTE
            }
        ];
        return this.gerentes;
    }

}
export = Database;