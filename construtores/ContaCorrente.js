import {Cliente} from "./Cliente.js"

export class contaCorrente {
  agencia;
  _cliente;
  _saldo = 0;
 

  
  set cliente (cliente){
    if(cliente instanceof Cliente){
      this._cliente = cliente;
    }
  }
  

  get cliente(){
    return this._cliente;
  }
  get saldo(){
    return this._saldo;
  }

  //observação: esse construtor ele não vai receber um nombre
  constructor(agencia , cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
  }
  
  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return this._saldo;
    }
  }
  depositar(valor){
    if(valor <= 0){
      return; 
    }
     this._saldo += valor;  
  }
}
