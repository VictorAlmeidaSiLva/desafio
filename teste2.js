function isFibonacci(num) {
    if (num < 0) return false

    let a = 0, b = 1

    while (a < num) {
        let temp = a + b
        a = b
        b = temp
    }

    return a === num
}

const numero = 55
if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`)
} else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`)
}
