var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var nomeVendedor = lines[0]
var salarioFixo = Number(lines[1])
var totalVendasMes = Number(lines[2])

var salarioFinal = salarioFixo + totalVendasMes * 0.15
console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`)
