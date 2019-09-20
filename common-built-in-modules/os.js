const os = require('os')
// const map = require('map')

// CPUs
console.log('os.cpus()')
console.log(os.cpus())

// Network interfaces:
//  ip address, mac addresses, netmasks and families
console.log('\nos.networkInterfaces()')
console.log(os.networkInterfaces())

// Memory
console.log('\nos.freemem()')
console.log(os.freemem())

// OS Type:
//  Linux: Linux
//  Windows: Windows_NT
//  Apple OS X: Darwin
console.log('\nos.type()')
console.log(os.type())

// OS Release Version
console.log('\nos.release()')
console.log(os.release())

// Current user:
//  username, uid, gid, homedir, shell
//  for windows:
//    shell: null
//    uid: -1
//    gid: -1
console.log('\nos.userInfo()')
console.log(os.userInfo())

// Constants:
//  os.constanst: returns os error codes and process signals

console.log('\nos.constants')
console.log(os.constants)

// Constants:
//  os.constants.signals:
//    reference of all process signals available in the underlying OS
console.log('\nos.constants.signals')
console.log(os.constants.signals)
