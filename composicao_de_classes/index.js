import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233301;


const conta1 = new contaCorrente();
conta1.agencia = 1001;
//a conta corrente vai estar associado ao cliente
conta1.Cliente = cliente1;

console.log(conta1);

const cliente2= new Cliente();
cliente2.nome = "Alice";
cliente2.CPF = 88822233309;

const conta2 = new contaCorrente();
conta2.Cliente = cliente2;
conta2.agencia = 102;

console.log(conta2);

conta1.depositar(500);
conta1.transferir(200,conta2);

console.log(conta1);
console.log(conta2);