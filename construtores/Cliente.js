export class Cliente {
  nome;
  _CPF;

  get CPF(){
    return this._CPF;
  }

  //usando construtores para eu criar o CPF apenas quando eu criar o cliente
  constructor(nome,cpf){
    this.nome = nome;
    this._CPF = cpf;
  }
}