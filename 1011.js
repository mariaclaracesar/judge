var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var pi = 3.14159
var raio = lines[0]

var volumeTotal = (4 / 3) * pi * (raio * raio * raio)
console.log(`VOLUME = ${volumeTotal.toFixed(3)}`)
