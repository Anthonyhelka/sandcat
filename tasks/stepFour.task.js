const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');

const importServerJS = (directory) => {
  const spinner = ora('Importing server.js file').start();
  return new Promise((resolve, reject) => {
    fs.copySync(path.resolve(__dirname, '../templates/express-js'), `./${directory}`);
    spinner.succeed()
    return resolve('Success: Imported server.js file and MongoDB directory');
  });
}

module.exports = importServerJS;
