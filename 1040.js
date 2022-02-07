var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const valores = lines[0].split(' ')
const N1 = parseFloat(valores[0])
const N2 = parseFloat(valores[1])
const N3 = parseFloat(valores[2])
const N4 = parseFloat(valores[3])

const media1 = N1 * 2
const media2 = N2 * 3
const media3 = N3 * 4
const media4 = N4 * 1

const mediaTotal = (media1 + media2 + media3 + media4) / 10
console.log(`Media: ${mediaTotal.toFixed(1)}`)

if (mediaTotal >= 7.0) {
  return console.log('Aluno aprovado.')
} else if (mediaTotal < 5.0) {
  return console.log('Aluno reprovado.')
} else {
  console.log('Aluno em exame.')
  const notaExame = parseFloat(lines[1])

  console.log(`Nota do exame: ${notaExame}`)

  const mediaExame = (notaExame + mediaTotal) / 2

  if (mediaExame >= 5.0) {
    console.log('Aluno aprovado.')
  } else {
    console.log('Aluno reprovado.')
  }

  console.log(`Media final: ${mediaExame.toFixed(1)}`)
}
