// Faça um algoritmo que calcule a área de um quadrado, em seguida mostre o dobro desta
// área para o usuário //

const prompt = require("prompt-sync")();

const lado = parseFloat(prompt("Digite a valor do lado do quadrado: "));

const area = lado**2;

const DobroDaArea = area * 2;

console.log(`O dobro da área do quadrado corresponde a: ${DobroDaArea}`);

