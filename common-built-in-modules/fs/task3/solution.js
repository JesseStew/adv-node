const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const currentFiles = fs.readdirSync(dirname); // read names of files

const logWithTime = (message) =>
  console.log(`${new Date().toUTCString()}: ${message}`);

// fs.watch()
fs.watch(dirname, (eventType, filename) => {
  if (eventType === 'rename') { // add or delete
    const index = currentFiles.indexOf(filename);

    // removes the removed file
    if (index >= 0) {
      currentFiles.splice(index, 1);

      // Outputs message with UTC timestamp
      logWithTime(`${filename} was removed`);
      return;
    }

    // File was added
    currentFiles.push(filename);
    // Outputs message with UTC timestamp
    logWithTime(`${filename} was added`);
    return;
  }

  // File was changed
  // Not always consistent be sure to test
  logWithTime(`${filename} was changed`);
});
