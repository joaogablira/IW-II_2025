// Exercício 2: Verifica se o usuário é maior ou menor de idade

// Solicita ao usuário que digite sua idade
let idade = parseInt(prompt("Digite sua idade:"));

// Verifica se o valor digitado é um número válido
if (isNaN(idade)) {
    alert("Idade inválida. Digite um número.");
} else {
    // Se idade for 18 ou mais, é maior de idade
    if (idade >= 18) {
        alert("Você é maior de idade.");
    // Se idade for meor que 18, é menor de idade
    } else {
        alert("Você é menor de idade.");
    }
}
