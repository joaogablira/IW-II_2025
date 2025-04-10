// Exercício 5: Exibe a tabuada de multiplicação de um número (de 1 a 10)

// Solicita ao usuário que insira um número
let num = parseInt(prompt("Digite um número para ver sua tabuada:"));

// Verifica se o número é válido
if (isNaN(num)) {
    alert("Valor inválido. Digite um número.");
} else {
    console.log(`Tabuada de ${num}:`);

    // Usa um laço FOR para multiplicar o número por valores de 1 a 10
    for (let i = 1; i <= 10; i++) {
        // Exibe o resultado da multiplicação formatado
        console.log(`${n} x ${i} = ${num * i}`);
    }
}
