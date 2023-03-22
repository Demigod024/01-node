const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./files/first.txt', 'utf8')
const second = readFileSync('./files/second.txt', 'utf8')

writeFileSync(
  './files/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
