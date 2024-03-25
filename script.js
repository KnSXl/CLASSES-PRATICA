// Importa a classe Pessoa do arquivo ClassePessoa.js
import Pessoa from "./ClassePessoa.js";

// Cria instancias da Classe Pessoa
const Kaua = new Pessoa("Kauã", 17);
const Leticia = new Pessoa("Leticia", 15);
const teste = new Pessoa()

// Testes usando métodos da ClassePessoas.js

console.log(''); // Quebra de linha

// Apresentar (1º Jeito)
teste.apresentar(Kaua);
teste.apresentar(Leticia);


console.log(''); // Quebra de linha


// Apresentar (2º Jeito)
/* Kaua.apresentar()
Leticia.apresentar()
console.log(''); */


// Casal
teste.casal(Kaua, Leticia);


console.log(''); // Quebra de linha


// Termino
teste.termino(Kaua, Leticia);
