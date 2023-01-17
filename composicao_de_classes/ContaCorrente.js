export class contaCorrente {
  //private
  _saldo = 0;
  
  //public
  agencia;
  //atributo da classe contaCorrente é a classe Cliente
  Cliente;
  
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

  transferir(valor,contaTransferencia) {
    if(valor > 0){
    this.sacar(valor);
    contaTransferencia.depositar(valor);
    }
  }
}