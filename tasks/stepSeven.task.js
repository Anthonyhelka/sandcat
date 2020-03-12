const inquirer = require('inquirer');
const { exec } = require('child_process');
const ora = require('ora');

const installPackages = (directory) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const prompt = await inquirer.prompt([
        {
          type: 'list',
          name: 'installPackages',
          message: 'Do you want Sandcat to install your npm packages?',
          choices: [
            { name: 'How thoughtful of you Sandcat, yes that sounds great!', value: true },
            { name: 'No thanks, I got it from here!', value: false }
          ]
        }
      ]);
      if (prompt.installPackages === true) {
        const spinner = ora('Installing npm packages').start();
        exec(`cd ${directory} && npm install && cd client && npm install`, (error, stdout, stderr) => {
          spinner.stop();
          if (error) {
            spinner.fail();
            return reject(`${error}`);
          }
          if (stderr) {
            spinner.succeed();
            return resolve('Success: Installed npm packages');
          }
          spinner.succeed();
          return resolve('Success: Installed npm packages');
        });
      } else {
        return resolve();
      }
    })();
  });
}

module.exports = installPackages;
