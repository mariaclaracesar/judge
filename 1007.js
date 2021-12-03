var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines[0]
var B = lines[1]
var C = lines[2]
var D = lines[3]

var diferença = A * B - C * D
console.log(`DIFERENCA = ${diferença}`)
