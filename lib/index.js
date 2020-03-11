const colors = require('colors');
const fs = require('fs');
const executor = require('./executor.js');

const serverJS = `const express = require('express');\nconst path = require('path');\n\nconst app = express();\n\napp.use(express.static(path.join(__dirname, 'client/build')));\n\napp.get('/api/hello_world', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.get('*', (req, res) => {\n  res.sendFile(path.join(__dirname+'/client/build/index.html'));\n});\n\nconst port = process.env.PORT || 5000;\napp.listen(port, () => console.log('Listening on port ' + port));`;

const executeCommand = (command, task) => {
  return new Promise((resolve, reject) => {
    executor(command, task, (status, message) => {
      if (status === 'Error') {
        return reject(`${status}: ${message}`);
      }
      return resolve(`${status}: ${task}`);
    });
  });
}

const sandcat = (directory) => {
  console.log(`Sandcat will create your MERN stack application in the ${directory} directory, meow!`.bold.cyan);

  new Promise((resolve, reject) => {
    executeCommand(`mkdir ${directory} && cd ${directory}`, `Create ${directory} directory`)
    .then((result) => {
      console.log(result.bold.green);
      new Promise((resolve, reject) => {
        executeCommand(`cd ${directory} && npm init -y`, `Initialize Node_Modules`)
        .then((result) => {
          console.log(result.bold.green);
          new Promise((resolve, reject) => {
            executeCommand(`cd ${directory} && npm install express`, `Install Express.js`)
            .then((result) => {
              console.log(result.bold.green);
              new Promise((resolve, reject) => {
                executeCommand(`cd ${directory} && touch server.js && echo "${serverJS}" >> server.js`, 'Create and populate server.js file')
                .then((result) => {
                  console.log(result.bold.green);
                  new Promise((resolve, reject) => {
                    executeCommand(`cd ${directory} && npx create-react-app client`, 'Initialize React Application in Client Directory')
                    .then((result) => {
                      console.log(result.bold.green);
                      new Promise((resolve, reject) => {
                        const rootJSON = JSON.parse(fs.readFileSync(`./${directory}/package.json`).toString());
                        const newScripts = { "start": "node server.js", "heroku-postbuild": "cd client && npm install && npm run build", "test": "echo \"Error: no test specified\" && exit 1" };
                        rootJSON.main = 'server.js';
                        rootJSON.scripts = newScripts;
                        fs.writeFileSync(`./${directory}/package.json`, JSON.stringify(rootJSON, null, 2));
                        executeCommand(`cd ${directory} && npm install`, `Update ${directory} package.json file`)
                        .then((result) => {
                          console.log(result.bold.green)
                          new Promise((resolve, reject) => {
                            const reactJSON = JSON.parse(fs.readFileSync(`./${directory}/client/package.json`).toString());
                            reactJSON.proxy = 'http://localhost:5000/';
                            fs.writeFileSync(`./${directory}/client/package.json`, JSON.stringify(reactJSON, null, 2));
                            executeCommand(`cd ${directory} && cd client && rm yarn.lock && npm install`, `Update client package.json file`)
                            .then((result) => {
                              console.log(result.bold.green);
                              new Promise((resolve, reject) => {
                                executeCommand(`cd ${directory} && git init && touch .gitignore && echo "node_modules" >> .gitignore && cd client && rm .git`, 'Initialize Git and create .gitignore file')
                                .then((result) => {
                                  console.log(result.bold.green);
                                  console.log(`Sandcat has finished, navigate to the ${directory} directory to see your new MERN stack application, meow!`.bold.cyan);
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        });
      })
    }).catch((error) => {
      console.log(error.bold.red);
    });
  });

}

module.exports = sandcat;
