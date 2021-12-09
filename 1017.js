var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var tempoGastoNaViagem = lines[0]
var velocidadeMedia = lines[1]

var kmL = 12

var litrosNecesarios = (tempoGastoNaViagem * velocidadeMedia) / kmL
console.log(litrosNecesarios.toFixed(3))
