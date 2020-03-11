# Sandcat

<a href="https://www.npmjs.com/package/sandcat" target="_blank"><img src="https://img.shields.io/npm/v/sandcat" /></a>

Sandcat is a command line utility that makes it easy to create starting points for MERN stack applications.

# Install Globally
```
$ npm install sandcat -g
```

# Usage

In the terminal, run:
```
$ npx sandcat <application_name>
```
This will create a ready out of the box MERN stack application in the `<application_name>` directory, no configuration necessary!

# Express

In order to start your Express server, navigate to the `<application_name>` directory and run:
```
$ npm start
```
To check if Express is working properly, visit [localhost:5000/api/hello_world](http://localhost:5000/api/hello_world), you should see `Hello World!` displaying to the screen.

# React 

In order to start your React server, you will need to open a new terminal window and navigate to the `<application_name>/client` directory and run:
```
$ npm start
```
To check if React is working properly, visit [localhost:3000/](http://localhost:3000/), you should see the default React application provided by [create-react-app](https://www.npmjs.com/package/create-react-app).

# Example Output
```
$ Sandcat will create your MERN stack application in the application_name directory, meow!
$ Success: Create testFile directory
$ Success: Initialize Node_Modules
$ Success: Install Express.js
$ Success: Create and populate server.js file
$ Success: Initialize React Application in Client Directory
$ Success: Update application_name package.json file
$ Success: Update client package.json file
$ Success: Initialize Git and create .gitignore file
$ Sandcat has finished, navigate to the application_name directory to see your new MERN stack application, meow!
```
