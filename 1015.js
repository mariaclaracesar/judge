var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var primeiraLinha = lines[0].split(' ')
var x1 = primeiraLinha[0]
var y1 = primeiraLinha[1]
var segundaLinha = lines[1].split(' ')
var x2 = segundaLinha[0]
var y2 = segundaLinha[1]

var calculo = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
var distancia = Math.sqrt(calculo)
console.log(distancia.toFixed(4))
