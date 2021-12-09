var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var distancia = lines[0]

var distanciaMinutos = distancia * 2
console.log(`${distanciaMinutos} minutos`)
