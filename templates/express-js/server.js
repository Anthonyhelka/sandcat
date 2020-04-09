const express = require('express');
const path = require('path');
const connectDB = require('./config/db.js');

const app = express();

connectDB();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json({ extended: false }));

app.get('/api/hello_world', (req, res) => {
  res.send('Hello World!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
