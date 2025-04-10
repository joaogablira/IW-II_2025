// Exercício 4: Faz uma contagem regressiva a partir de um número até 0

// Solicita ao usuário que digite um número inicial
let num = parseInt(prompt("Digite um número para contagem regressiva:"));

// Verifica se é um número válido
if (isNaN(num)) {
    alert("Valor inválido. Digite um número.");
} else {
    console.log(`Contagem regressiva de ${num} até 0:`);

    // Enquanto o número for maior ou igual a zero, continua a contagem
    while (numero >= 0) {
        console.log(num); // Mostra o número atual
        num--; // Decrementa o número
    }
}
