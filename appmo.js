var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/images'));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/userdetail");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    city:String
});
var User = mongoose.model("User", nameSchema);

app.get("/", function(req, res) {
    res.render('login')

});
app.get("/login", function(req, res) {
    res.render('login')

});
app.get("/", function(req, res) {
    res.render('reg');

});
app.get("/reg", function(req, res) {
    res.render('reg');

});

app.post("/addname", function(req, res){
    
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var password = req.body.password;
    var city = req.body.city;
    
  
  //use schema.create to insert data into the db
 User.create({

    firstName: firstName,
    lastName: lastName,
    city:city,
    password : bcrypt.hashSync(password, bcrypt.genSaltSync(10))




 },function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('user created', user);
      res.status(201).json(user);
    }
  });
});
app.post('/login', function(req, res) {
  console.log('logging in user');
  var firstName = req.body.firstName;
  var password = req.body.password;

  User.findOne({
    firstName: firstName
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        console.log('User found', user);
       res.status(200).json(user);
      } else {
        res.status(401).json('Unauthorized');
      }
    }
  });
});








app.listen(7070);
console.log("You are listening to port 7070");