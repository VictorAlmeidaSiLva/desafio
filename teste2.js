const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    if (num < 0) return false

    let a = 0, b = 1;

    while (a < num) {
        let temp = a + b
        a = b
        b = temp
    }

    return a === num
}

rl.question('Digite um número para verificar se ele pertence à sequência de Fibonacci: ', (input) => {
    const numero = parseInt(input)

    if (isNaN(numero)) {
        console.log('Por favor, digite um número válido.')
    } else {
        if (isFibonacci(numero)) {
            console.log(`O número ${numero} pertence à sequência de Fibonacci.`)
        } else {
            console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`)
        }
    }

    rl.close()
});
