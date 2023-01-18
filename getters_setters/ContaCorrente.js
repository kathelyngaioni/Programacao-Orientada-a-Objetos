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

  //no saldo eu só vou ter o acessor do tipo getter
  //quando eu só tenho o atributo get eu não consigo alterar diretamente
  //no caso, para alterar o saldo eu terei que usar os métodos sacar, depositar.....
  get saldo(){
    return this._saldo;
  }

  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return this._saldo;
    }
  }
  depositar(valor){
    if(valor <= 0){
      //retornar sem valor nenhum
      return; 
    }
     this._saldo += valor;  
  }
}

//existe o typeof e o instanceof