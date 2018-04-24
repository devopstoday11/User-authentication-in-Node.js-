const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./src/routes");

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(__dirname + '/src/images'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/userdetail");

app.use('/', routes);

app.listen(7070, () => {
  console.log("You are listening to port 7070");
});