// Faça um algoritmo que converta metros para centímetros //

const prompt = require("prompt-sync")();

const numero1 = parseFloat(prompt("Digite seu número em metros: "));

const numero2 = numero1 * 100;

console.log(`Seu número em centimetros equivale a: ${numero2}`);

