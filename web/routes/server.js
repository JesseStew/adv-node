const fs = require('fs')
const server = require('http').createServer()
const data = {}

server.on('request', (req, res) => {
  // console.log(req.url)
  switch (req.url) {
  case '/api':
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.end(JSON.stringify(data))
    break
  // making it dynamic using a template string (${...})
  case '/home':
  case '/about':
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end(fs.readFileSync(`./${req.url}.html`))
    break
  case '/':
    res.writeHead(301, { 'Location': '/home'})
    res.end(fs.readFileSync(`./home.html`))
    break
  default:
    res.writeHead(404)
    res.end()
  }
})

server.listen(8000)
