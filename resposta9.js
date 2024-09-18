// Faça um algoritmo que peça a temperatura em graus Fahrenheit, transforme e mostre a
// temperatura em graus Celsius. (C = 5 * ((F-32) / 9)).

const prompt = require("prompt-sync")();

const tempF = parseInt(prompt("Insira aqui a temperatura em °F: "));

const tempC = 5 * (tempF-32) / 9;

console.log(`A temperatura informada, em °C, é: ${tempC.toFixed(1)}`);