const fs = require('fs')
const path = require('path')
const dirname = path.join(__dirname, 'files')

// Reads the list of files, creates an array of (file names)
const files = fs.readdirSync(dirname)

files.forEach(file => {
  // don't use string concatenation
  // Always use path.join to make your code platform agnostic
  const filePath = path.join(dirname, file) // gets full path from names
  
  // fs.stat give meta info, just need file size, no contents
  fs.stat(filePath, (err, stats) => {
    if (err) throw err

    // Truncates size of files
    fs.truncate(filePath, stats.size/2, (err) => {
      if (err) throw err
    })
  })
})

