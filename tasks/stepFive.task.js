const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');

const importReactJS = (directory) => {
  const spinner = ora('Importing React into client directory').start();
  return new Promise((resolve, reject) => {
    fs.copySync(path.resolve(__dirname, '../templates/react-js'), `./${directory}/client`);
    spinner.succeed()
    return resolve('Success: Imported React into client directory');
  });
}

module.exports = importReactJS;
