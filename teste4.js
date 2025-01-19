const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0)

const calcularPercentual = (valor, total) => (valor / total) * 100

for (let estado in faturamento) {
    const percentual = calcularPercentual(faturamento[estado], totalFaturamento)
    console.log(`${estado}: ${percentual.toFixed(2)}%`)
}
