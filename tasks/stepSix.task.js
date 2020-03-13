const { exec } = require('child_process');
const ora = require('ora');

const gitInitialize = (directory) => {
  const spinner = ora('Initializing Git and creating .gitignore file in root directory').start();
  return new Promise((resolve, reject) => {
    exec(`cd ${directory} && git init && touch .gitignore && echo "node_modules" >> .gitignore`, (error, stdout, stderr) => {
      spinner.stop();
      if (error) {
        spinner.fail();
        return reject(`${error}`);
      }
      if (stderr) {
        spinner.succeed();
        return resolve('Success: Initialized Git and created .gitignore file in root directory');
      }
      spinner.succeed();
      return resolve('Success: Initialized Git and created .gitignore file in root directory');
    });
  });
}

module.exports = gitInitialize;
