var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var values = lines[0].split(' ')
var A = values[0]
var B = values[1]
var C = values[2]
var D = values[3]

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 == 0) {
  console.log('Valores aceitos')
} else {
  console.log('Valores nao aceitos')
}
