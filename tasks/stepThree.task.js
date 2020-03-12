const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');

const updatePackageJSON = (directory) => {
  const spinner = ora('Updating root package.json file').start();
  return new Promise((resolve, reject) => {
    const packageJSON = fs.readJsonSync(`${directory}/package.json`);

    const newDependencies = { "express": "^4.17.1" };
    const newScripts = { "start": "node server.js", "heroku-postbuild": "cd client && npm install && npm run build", "test": "echo \"Error: no test specified\" && exit 1" };

    packageJSON.main = 'server.js';
    packageJSON.dependencies = newDependencies;
    packageJSON.scripts = newScripts;

    fs.writeFileSync(`./${directory}/package.json`, JSON.stringify(packageJSON, null, 2));

    spinner.succeed()
    return resolve('Success: Updated root package.json file');
  });
}

module.exports = updatePackageJSON;
