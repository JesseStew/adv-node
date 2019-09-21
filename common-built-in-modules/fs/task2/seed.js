const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

// Synchonously create a destination directory
fs.mkdirSync(dirname);
const ms1Day = 24*60*60*1000;

// Create 10 sample files
for (let i=0; i < 10; i++) {
  const filePath = path.join(dirname, `file${i}`);
  
  // creates files
  fs.writeFile(filePath, i, (err) => {
    if (err) throw err;

    // Subtract 1 day millisecs multiplied by the file index
    // divide by 1000, to get seconds for fs.utimes
    const time = (Date.now() - i*ms1Day)/1000;

    // Used to change file's timestamp
    // fs.utimes(filePath, access_time_in_secs, modified_time_in_secs, err) 
    fs.utimes(filePath, time, time, (err) => {
      if (err) throw err;
    });
  });
}
