const { Console } = require('console')

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var valores = lines[0].split(' ')
var A = parseFloat(valores[0])
var B = parseFloat(valores[1])
var C = parseFloat(valores[2])
var pi = 3.14159

var trianguloRetangulo = (A * C) / 2
console.log(`TRIANGULO: ${trianguloRetangulo.toFixed(3)}`)

var circuloDeRaio = pi * (C * C)
console.log(`CIRCULO: ${circuloDeRaio.toFixed(3)}`)

var areaTrapezio = ((A + B) * C) / 2
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)

var areaQuadrado = B * B
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`)

var areaRetangulo = A * B
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`)
