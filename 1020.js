var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var dias = lines[0]

var ano = Math.trunc(dias / 365)
var mes = Math.trunc((dias % 365) / 30)
var dia = Math.trunc((dias % 365) % 30)

console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dia} dia(s)`)
