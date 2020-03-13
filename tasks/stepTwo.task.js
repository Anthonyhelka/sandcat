const { exec } = require('child_process');
const ora = require('ora');

const npmInitialize = (directory) => {
  const spinner = ora('Initializing npm in root directory').start();
  return new Promise((resolve, reject) => {
    exec(`cd ${directory} && npm init -y`, (error, stdout, stderr) => {
      spinner.stop();
      if (error) {
        spinner.fail();
        return reject(`${error}`);
      }
      if (stderr) {
        spinner.succeed();
        return resolve('Success: Initialized npm in root directory');
      }
      spinner.succeed();
      return resolve('Success: Initialized npm in root directory');
    });
  });
}

module.exports = npmInitialize;
