// Faça um algoritmo que peça a temperatura em graus Celsius, transforme e mostre em
// graus Fahrenheit. //

const prompt = require("prompt-sync")();

const tempC = parseInt(prompt("Insira aqui a temperatura em °C: "));

const tempF = (tempC * 9 / 5) + 32;

console.log(`A temperatura informada, em °F, é: ${tempF.toFixed(1)}`);





