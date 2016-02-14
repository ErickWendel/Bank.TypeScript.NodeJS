import Funcionario = 
    require("./Funcionario");
   
//Herdamos a classe Funcionario
class Secretaria extends Funcionario {
 //a implementacao virá da instancia do objeto
 //SOMENTE pra funcionaria
 public peitos: number;   
}

export = Secretaria;