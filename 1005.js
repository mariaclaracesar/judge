var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines[0]
var B = lines[1]

var media = (A * 3.5 + B * 7.5) / 11
console.log(`MEDIA = ${media.toFixed(5)}`)
