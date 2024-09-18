// Faça um algoritmo que peça o raio de um círculo, calcule e mostre sua área //

const prompt = require("prompt-sync")();

const raio = parseFloat(prompt("Digite a medida do raio do círculo: "));

const pi = 3.14159;

const area_circulo = pi * (raio**2);

console.log(`A área do círculo é: ${area_circulo.toFixed(2)}`);


