const querystring = require('querystring')

let obj = {
  name: 'Samer Buna',
  website: 'jsComplete.com/samer-buna'
}

console.log('querystring.stringify({\n  name: \'Samer Buna\',\n  website: \'jsComplete.com/samer-buna\'\n})')
// returns a query string that can be used in a url query
console.log(querystring.stringify(obj))

let qString = querystring.stringify(obj)
console.log(`\nquerystring.parse(${qString})`)
console.log(querystring.parse(qString))
