# Sandcat

<a href="https://www.npmjs.com/package/sandcat" target="_blank"><img src="https://img.shields.io/npm/v/sandcat" /></a>

Sandcat is a command line utility that makes it easy to create starting points for MERN stack applications.

# Installation

We highly recommend you install Sandcat globally so that you can use it anywhere. To do so, run this command below:
```
$ npm install sandcat -g
```

# Usage

If you would like to see a list of options that Sandcat offers, run this command below:
```
$ npx sandcat -help
```

To create a MERN stack application, run:
```
$ npx sandcat <application_name>
```
This will create a ready out of the box MERN stack application in the `<application_name>` directory, no configuration necessary!

# MongoDB

To properly set up your MongoDB database, you will need to create an account on the [official MongoDB website](https://account.mongodb.com/account/login).

Once you are signed up with MongoDB, create a project and a cluster. You will then need to connect to the cluster and paste the URI code that MongoDB gives you into the default.json file found in the config directory. The file should look like this:
```
{
  "mongoURI": "mongodb+srv://username:<password>@gymkeeper-z5eot.mongodb.net/test?retryWrites=true&w=majority"
}
```

# Express

In order to start your Express server, navigate to the `<application_name>` directory and run:
```
$ npm install
$ npm start
```
To check if Express is working properly, visit [localhost:5000/api/hello_world](http://localhost:5000/api/hello_world), you should see `Hello World!` displaying to the screen.

# React

In order to start your React server, you will need to open a new terminal window and navigate to the `<application_name>/client` directory and run:
```
$ npm install
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

# Example Project

Below are a few links to 'sandcat-test', an example project generated entirely by Sandcat:

[Github Repository](https://github.com/Anthonyhelka/sandcat-test)

[Heroku Application](https://sandcat-test.herokuapp.com/)
