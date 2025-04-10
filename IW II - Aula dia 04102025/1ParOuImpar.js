// Exercício 1: Verifica se um número é par ou ímpar

// Solicita ao usuário que digite um número inteiro
let num = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o valor digitado é realmente um número
if (isNaN(num)) {
    alert("Valor inválido. Por favor, digite um número.");
} else {
    // Se o número for divisível por 2, é par; caso contrário, é ímpar
    if (num % 2 === 0) {
        alert(`O número ${num} é PAR.`);
    } else {
        alert(`O número ${num} é ÍMPAR.`);
    }
}
