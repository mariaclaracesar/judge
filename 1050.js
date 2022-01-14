var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var DDD = lines[0]

let destination
if (DDD === '61') {
  destination = 'Brasilia'
} else if (DDD === '71') {
  destination = 'Salvador'
} else if (DDD === '11') {
  destination = 'Sao Paulo'
} else if (DDD === '21') {
  destination = 'Rio de Janeiro'
} else if (DDD === '32') {
  destination = 'Juiz de Fora'
} else if (DDD === '19') {
  destination = 'Campinas'
} else if (DDD === '27') {
  destination = 'Vitoria'
} else if (DDD === '31') {
  destination = 'Belo Horizonte'
} else {
  destination = 'DDD nao cadastrado'
}

console.log(destination)
