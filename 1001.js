var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines[0]
var B = lines[1]

var X = Number(A) + Number(B)
console.log('X = ' + X)
