import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Claudio";
cliente1.cpf = 11122233301;


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