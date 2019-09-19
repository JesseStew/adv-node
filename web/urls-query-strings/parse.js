const url = require('url')

console.log('url.parse(\'https://www.pluralsight.com/search?q=buna\')')

// parses URL
// returns:
//  all the elements in URL
console.log(url.parse('https://www.pluralsight.com/search?q=buna'))

console.log('\n\nurl.parse(\'https://www.pluralsight.com/search?q=buna\', true)')

// parses URL and query string
let exampleUrl = url.parse('https://www.pluralsight.com/search?q=buna', true)
console.log(exampleUrl)

console.log('\n\nurl.parse(\'https://www.pluralsight.com/search?q=buna\', true).query.q')
let exampleUrlTrue = url.parse('https://www.pluralsight.com/search?q=buna', true).query.q
console.log(exampleUrlTrue)

// inverse of parsing
let parsedUrl = {
  protocol: 'https',
  host: 'www.pluralsight.com',
  search: '?q=buna',
  pathname: '/search'
}

console.log('\n\nurl.format({\n  protocol: \'https\',\n  host: \'www.pluralsight.com\',\n  search: \'?q=buna\',\n  pathname: \'/search\'\n})')

console.log(url.format(parsedUrl))