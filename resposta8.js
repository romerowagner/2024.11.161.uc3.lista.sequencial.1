// Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. //

const prompt = require("prompt-sync")();

const ValorHora = parseFloat(prompt("Insira aqui quanto você recebe p/ hora trabalhada: "));

const NumeroDeHorasMes = parseFloat(prompt("Insira aqui quantas horas você trabalha no mês: "));

const SalarioMes = ValorHora * NumeroDeHorasMes;

console.log(`O valor total do seu salário no mês é: ${SalarioMes.toFixed(2)}`);
