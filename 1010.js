var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var peca1 = lines[0].split(' ')
var codigoPeca2 = peca1[0]
var numeroPeca1 = peca1[1]
var valorUnitarioPeca1 = peca1[2]
var codigoPeca2 = peca2[0]
var peca2 = lines[1].split(' ')
var numeroPeca2 = peca2[1]
var valorUnitarioPeca2 = peca2[2]

var total1 = numeroPeca1 * valorUnitarioPeca1
var total2 = numeroPeca2 * valorUnitarioPeca2

var valorTotal = total1 + total2
console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`)
