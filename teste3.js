const fs = require('fs')

const rawData = fs.readFileSync('dados.json')
const dados = JSON.parse(rawData)

const faturamentosValidos = dados.filter(dia => dia.valor > 0).map(dia => dia.valor)

const menorFaturamento = Math.min(...faturamentosValidos)
const maiorFaturamento = Math.max(...faturamentosValidos)
const mediaMensal = faturamentosValidos.reduce((soma, valor) => soma + valor, 0) / faturamentosValidos.length

const diasAcimaDaMedia = dados.filter(dia => dia.valor > mediaMensal).length

console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`)
console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`)
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`)
