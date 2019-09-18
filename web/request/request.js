const http = require('http') // same with https module, just replace

// // http.request() returns an (EventEmitter Object)
// const req = http.request(
//   { hostname: 'www.google.com' }, // can specify (method: '...') defaults to (method: 'GET')
//   (res) => { // Doesn't have an (err) argument, b/c this handler is registered as an event listener
//     // console.log(res) // outputs entire response
//     console.log(res.statusCode)
//     console.log(res.headers)

//     res.on('data', (data) => {
//       console.log(data.toString())
//     })
//   }
// )

// simpler, if not writing any info to the headers request
//          not posting or putting or deleting data
const req = http.get( // request done using the (http.globalAgent)
  'http://www.google.com',
  (res) => { // Doesn't have an (err) argument, b/c this handler is registered as an event listener
    // res: http.IncomingMessage
    // console.log(res) // outputs entire response
    console.log(res.statusCode)
    console.log(res.headers)

    res.on('data', (data) => {
      console.log(data.toString())
    })
  }
)

req.on('error', (e) => console.log(e)) // event listener that will handle errors

// vvv (http.Agent) vvv
console.log(req.agent) // request done using the (http.globalAgent)
                       //   node uses this to manage sockets
                       //   has pre-configured options:
                       //     keepAliveMsecs, keepAlive, maxSockets, maxFreeSockets

// req.end() // not necessary with a get() method




// 5 Major Objects in http module
//  http.Server: 
//    creates basic server
//    inherits from net.Server (EventEmitter)
//  http.ServerResponse (EventEmitter)
//    created internally by http.Server
//    Implements the writable stream interface
//  http.Agent
//    manages pooling sockets used in http.ClientRequests
//    uses http.globalAgent by default
//    new Agent
//      we can create a different with different options when necessary
//  http.ClientRequest (EventEmitter)
//    Used when initiating an http request
//    Implements the writable stream interface
//  http.IncomingMessage (EventEmitter)
//    Implements the readable stream interface