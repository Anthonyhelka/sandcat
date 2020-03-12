const fs = require('fs-extra');
const inquirer = require('inquirer');
const ora = require('ora');

const createRootDirectory = (directory) => {
  return new Promise((resolve, reject) => {
    const directoryChecker = fs.ensureDirSync(`./${directory}`);

    if (directoryChecker === null) {
      (async () => {
        const prompt = await inquirer.prompt([
          {
            type: 'list',
            name: 'overwriteDirectory',
            message: `Woah! The directory ${directory} already exists, do you want to overwrite it?`,
            choices: [
              { name: 'Yes overwrite it!', value: true },
              { name: 'No thanks, that was a close one!', value: false }
            ]
          }
        ]);
        if (prompt.overwriteDirectory === true) {
          const spinner = ora('Installing npm packages').start();
          fs.emptyDirSync(`./${directory}`);
          fs.ensureDirSync(`./${directory}`);
          spinner.succeed()
          return resolve('Success: Created Root Directory');
        } else {
          return reject('Session ended by user');
        }
      })();
    } else {
      const spinner = ora('Installing npm packages').start();
      fs.ensureDirSync(`./${directory}`);
      spinner.succeed()
      return resolve('Success: Created Root Directory');
    }
  });
}

module.exports = createRootDirectory;
