// Faça um algoritmo que peça dois números e imprima a soma. //

const prompt = require("prompt-sync")();

const numero1 = parseInt(prompt("Digite o 1º número"));
const numero2 = parseInt(prompt("Digite o 2º número"));

const soma = numero1 + numero2;

console.log(`A soma dos números informados é: ${soma}`);