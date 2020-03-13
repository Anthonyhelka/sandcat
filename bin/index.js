#!/usr/bin/env node

const colors = require('colors');

const path = require('path');
const directory = process.argv[2];

const json = require('../package.json');
const createRootDirectory = require('../tasks/stepOne.task.js');
const npmInitialize = require('../tasks/stepTwo.task.js');
const updatePackageJSON = require('../tasks/stepThree.task.js');
const importServerJS = require('../tasks/stepFour.task.js');
const importReactJS = require('../tasks/stepFive.task.js');
const gitInitialize = require('../tasks/stepSix.task.js');
const installPackages = require('../tasks/stepSeven.task.js');

const createProject = async () => {
  try {
    console.log(`Sandcat will create your MERN stack application in the ${directory} directory, meow!`.bold.yellow);
    const stepOne = await createRootDirectory(directory);
    const stepTwo = await npmInitialize(directory);
    const stepThree = await updatePackageJSON(directory);
    const stepFour = await importServerJS(directory);
    const stepFive = await importReactJS(directory);
    const stepSix = await gitInitialize(directory);
    const stepSeven = await installPackages(directory);
    console.log(`Sandcat has finished creating your MERN stack application, navigate to the ${directory} directory to check it out, meow!`.bold.yellow);
  } catch(error) {
    console.log(`${error}`.bold.red);
    process.exit(1)
  }
}

const helpMessage = `Need some help? Here is a list of Sandcat options:\n\nsandcat <application_name>   create MERN stack application\nsandcat -help                see list of Sandcat options\n\nsandcat@${json.version} | https://www.npmjs.com/package/sandcat`;
if (process.argv[2] === '-help' || process.argv[2] === 'help' || process.argv[2] === undefined || process.argv[2].trim() === '') {
  console.log(helpMessage.bold.yellow);
} else if (String(process.argv[2])) {
  createProject();
} else {
  console.log(helpMessage.bold.yellow);
}
