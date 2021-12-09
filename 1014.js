var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var distanciaTotalPercorrida = lines[0]
var totalDeCombustivelGasto = lines[1]

var consumoMedio = distanciaTotalPercorrida / totalDeCombustivelGasto
console.log(`${consumoMedio.toFixed(3)} km/l`)
