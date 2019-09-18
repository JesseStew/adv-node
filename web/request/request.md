# 5 Major Objects in http module
## http.Server: 
  * creates basic server
  * inherits from net.Server (EventEmitter)
## http.ServerResponse (EventEmitter)
  * created internally by http.Server
  * Implements the writable stream interface
## http.Agent
  * manages pooling sockets used in http.ClientRequests
  * uses http.globalAgent by default
  * new Agent
  * *  we can create a different with different when necessary
## http.ClientRequest (EventEmitter)
  * Used when initiating an http request
  * Implements the writable stream interface
## http.IncomingMessage (EventEmitter)
  * Implements the readable stream interface