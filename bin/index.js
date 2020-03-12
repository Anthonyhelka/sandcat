#!/usr/bin/env node

const colors = require('colors');

const sandcat = require('../lib/index.js');
const rootJSON = require('../package.json');

const helpMessage = `Need some help? Here is a list of Sandcat options:\n\nsandcat <application_name>   create MERN stack application\nsandcat -help                see list of Sandcat options\n\nsandcat@${rootJSON.version} | https://www.npmjs.com/package/sandcat`;

if (process.argv[2] === '-help' || process.argv[2] === 'help') {
  console.log(helpMessage.bold.cyan);
} else if (String(process.argv[2])) {
  sandcat(process.argv[2]);
} else {
  console.log(helpMessage.bold.cyan);
}
