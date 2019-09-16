process.stdout.write('\u001B[2J\u001B[0;0f')

const server = require('net').createServer()
let counter = 0
let sockets = {}

server.on('connection', socket => {
  socket.id = counter++
  sockets[socket.id] = socket

  console.log('Client is connected')
  socket.write('Welcome new client\n')

  socket.on('data', data => {
    Object.entries(sockets).forEach(([, cs]) => {
      cs.write(`${socket.id}: `)                // client side
      cs.write(data)                            // assumes utf8 encoding (unless otherwise specified e.g: socket.write(data))
    })
  })

  // socket.on('data', data => {
  //   // console.log('${socket.id}: ', data) // server side, displayed as buffer (unless otherwise specified)
  //   socket.write('${socket.id}: ') // client side
  //   socket.write(data)        // assumes utf8 encoding (unless otherwise specified e.g: socket.write(data))
  // })

  socket.on('end', () => {
    console.log('Client disconnected')
  })
  // socket.setEncoding('utf8')  // globally set encoding (client/server)
})

server.listen(8000, () => console.log('Server bound'))
