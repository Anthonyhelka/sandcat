const { exec } = require('child_process');

const executor = (command, task, callback) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      callback('Error', `${error}`.trim());
    }
    if (stderr) {
      callback('Success', `${stderr}`.trim());
    }
    callback('Success', `${stdout}`.trim());
  });
}

module.exports = executor;
