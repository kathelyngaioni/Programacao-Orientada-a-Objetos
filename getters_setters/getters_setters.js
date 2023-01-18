//Getters e setters são assessores
//eles têm carinha de métodos mas não são métodos são acessores

import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();

cliente1.nome = "Alice";
cliente1.CPF = 88822233309;

const conta1 = new contaCorrente();

conta1.agencia = 101;
//no caso 0 não é uma instancia de cliente e assim ele não
//será atribuido
//por isso o undefined
conta1.cliente = 0;

console.log(conta1);

conta1.cliente=cliente1;
console.log(conta1);

//com o assessor get eu consigo pegar só o cliente
console.log(conta1.cliente);



