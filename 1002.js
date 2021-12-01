var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var raio = lines[0]
var pi = 3.14159

var area = pi * (raio * raio)
console.log(`A=${area.toFixed(4)}`)
