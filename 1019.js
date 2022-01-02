var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var segundos = lines[0]

var horas = Math.trunc(segundos / 3600)
var minutos = Math.trunc((segundos % 3600) / 60)
var segundo = Math.trunc((segundos % 3600) % 60)

console.log(`${horas}:${minutos}:${segundo}`)
