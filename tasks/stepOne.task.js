const fs = require('fs-extra');
const ora = require('ora');

const createRootDirectory = (directory) => {
  const spinner = ora('Creating Root Directory').start();
  return new Promise((resolve, reject) => {
    fs.ensureDir(`./${directory}`);
    spinner.succeed()
    return resolve('Success: Created Root Directory');
  });
}

module.exports = createRootDirectory;
