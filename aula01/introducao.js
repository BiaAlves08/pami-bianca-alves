console.log("Olá mundo");

var Variável101= "Oi, ";
let Variavel102= "tudo bem?";
const Variavel103= "Vocês não são lindos";

// Concatenação de variaveis
console.log(Variável101 + Variavel102); // Sem espaços
console.log(Variável101, Variavel102 ); // Insere espaços

Variavel101 = "Olá! ";
console.log(Variável101, Variavel102);

// Variavel103 = "Hello";
/* Variaveis do tipo constante não podem 
receber um novo valor que sobreescreva o original  */


let Teste = "texto";
console.log(typeof(Teste));
Teste = 2;
console.log(typeof(Teste));
Teste= {nome: "João", idade: 38};
console.log("O tipo agora é", typeof(Teste));
Teste = [1,2];
console.log("O resultado do tipo de array é", typeof(Teste));

//Notação de objeto

