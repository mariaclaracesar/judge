var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines[0]
var B = lines[1]
var C = lines[2]

var media = (A * 2 + B * 3 + C * 5) / 10
console.log(`MEDIA = ${media.toFixed(1)}`)
