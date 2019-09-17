const server = require('http').createServer()

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html'})
  // res.end('Hello world\n') // HTTP 1.1: terminates a response with res.end()
  // ^^^ This is not optional ^^^ if you don't res.end() it will timeout after 2 min
  res.write('Hello world\n') // Does not terminate response

  setTimeout(() => {
    res.write('Yet another hello world\n')
  }, 1000)
})

server.timeout = 10000 // default is 2 min, now it is is 10 sec
server.listen(8000)