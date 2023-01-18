import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Alice", 88822233309);
console.log(cliente1);
console.log(cliente1.CPF);

const conta1 = new contaCorrente(101,cliente1);
console.log(conta1)

console.log(contaCorrente.numeroDeContas);