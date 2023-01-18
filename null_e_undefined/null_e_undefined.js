import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"


const conta1 = new contaCorrente();
conta1.cliente = new Cliente();
//conta1.cliente.nome = "Alice";
//conta1.cliente.CPF = 88822233309;
conta1.agencia = 102;

console.log(conta1);

const conta2 = new contaCorrente();
conta2.cliente = null;
conta2.agencia = 202;
console.log(conta2);

const conta3= new contaCorrente();
conta3.cliente= null;

//conta3.cliente.nome = "Jorge"; //erro
//não podemos atribuir propriedade a algo null(Cannot set properties of null (setting 'nome'))

conta3.agencia = 303;
console.log(conta3);