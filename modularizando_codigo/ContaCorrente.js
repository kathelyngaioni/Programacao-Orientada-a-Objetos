export class contaCorrente {
  agencia;
  _saldo = 0;

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