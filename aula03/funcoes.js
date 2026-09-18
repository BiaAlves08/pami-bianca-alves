"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saudacao(nome) {
    return 'Olá, $(nome)!';
}
console.log(saudacao('Leandro')); // Retorna 'Olá, Leandro!'
function exibirUsuario(usuario) {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}
exibirUsuario({ nome: 'Marcos', idade: 22 }); // Retorna 'Nome: Marcos' e 'Idade: 22'
function listarNomes(nomes) {
    nomes.forEach((nome => console.log(nome)));
}
listarNomes(['Ana', 'Bruno', 'Carlos']); // Retorna 'Ana', 'Bruno' e 'Carlos'
//# sourceMappingURL=funcoes.js.map