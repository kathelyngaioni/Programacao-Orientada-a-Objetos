//Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado.Apesar de ainda ser possível alterar essa propriedade isso é considerado uma má prática e estamos quebrando o encapsulamento da classe.

class Cliente {
  nome;
  CPF;
}


const cliente1 = new Cliente();
cliente1.nome = "Claudio";
cliente1.cpf = 11122233301;

class contaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return this.#saldo;
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

const contaCorrenteRicardo = new contaCorrente();

//não posso acessar saldo diretamente
//contaCorrenteRicardo.#saldo = 10000; //erro
contaCorrenteRicardo.agencia = 1001;

//para adicionar o saldo usar o método depositar
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(50);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

//OBSERVAÇÃO: como saldo é um atributo privado, ele não aparece quando damos um console.log

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
