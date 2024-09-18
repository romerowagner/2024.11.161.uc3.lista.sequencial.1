// Faça um algoritmo que peça as 4 notas bimestrais e mostre a média //

const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Digite a 1ª nota: "));
const nota2 = parseFloat(prompt("Digite a 2ª nota: "));
const nota3 = parseFloat(prompt("Digite a 3ª nota: "));
const nota4 = parseFloat(prompt("Digite a 4ª nota: "));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média das 4 notas informadas é: ${media}`);