const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);
const ms1Day = 24*60*60*1000;

// Loop over all files in directory
files.forEach(file => {
  const filePath = path.join(dirname, file);

  // Read stats metadata for each file
  fs.stat(filePath, (err, stats) => {
    if (err) throw err;

    // stats.mtime.getTime()
    if ((Date.now() - stats.mtime.getTime() > 7*ms1Day)) {
      // fs.unlink() deletes file
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`deleted ${filePath}`);
      });
    }
  });
});
