const dns = require('dns') // name -- address

// Uses libuv threads
// dns.lookup('pluralsight.com', (err, address) => {
//   console.log(address)
// })

// All other all other methods on the DNS module
// use the network directly

// dns.resolve4('pluralsight.com', (err, address) => {
//   console.log(address)
// })

// dns.resolve('pluralsight.com', 'A', (err, address) => {
//   console.log(address)
// })

dns.reverse('54.214.104.183', (err, hostnames) => {
  console.log(hostnames)
})
