var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var valores = lines[0].split(' ')
var A = Number(valores[0])
var B = Number(valores[1])
var C = Number(valores[2])

let maior = A
if (B > A && B > C) {
  maior = B
}

if (C > A && C > B) {
  maior = C
}
console.log(`${maior} eh o maior`)
