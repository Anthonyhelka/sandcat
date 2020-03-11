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

# Deployment

Sandcat creates applications that are easily pushed to both Github and Heroku!

**Github**

In order to push your new application to [Github](https://github.com/), create a new repository and then run these commands:
```
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your_username/application_name.git
git push -u origin master
```

**Heroku**

In order to push your new application to [Heroku](https://dashboard.heroku.com/apps), create a new app and then run these commands:
```
heroku login
heroku git:remote -a application_name
git push heroku master
```
