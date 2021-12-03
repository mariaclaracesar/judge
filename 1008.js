var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var numeroFuncionario = lines[0]
var numeroHorasTrabalhadas = lines[1]
var valorPorHora = lines[2]

var salario = numeroHorasTrabalhadas * valorPorHora
console.log(`NUMBER = ${numeroFuncionario}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)
