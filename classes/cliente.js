class Cliente {
  nome;
  CPF;
  agencia;
  saldo;
}

//isso aqui não funciona
//const cliente1 = new Cliente("Kathelyn",1234567,0881,0);

const cliente2= new Cliente;
cliente2.nome = "Ricardo";
cliente2.CPF= 11122233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente2);