# User-authentication-in-Node.js-
My Goal:
I have focused on authenticating the user while he/she is logging in .The user have to first register himself/herself,then he/she can login .If the username and password are correct then he/she will be authenticated.Main goal is to describe the functioning,how the things are working in Node.js Environment.




Authentication is for identifying users and provide different access rights and content depending on their id. In most cases the application provides a login form with certain credentials to verify a user.
What I will use for the authentication:-
1>Plain Javascript
2>Node.js
3>MongoDB(Database)
4>Express.js(Framework)
5>EJS(Effective Javascript)It is used as a view engine.It is simply a templating language that lets you to generate HTML markup with the javascript.
6>Mongoose(Object Data Modelling Technique)
7>HTML,CSS,BOOTSTRAP(Front end)
Designed very simply.

Modules/Packages used:

Node Package Manager(NPM):Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application. It is also an online repository for open-source Node.js packages.
Packages used are:
a>bodyParser:
Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

b>bcrypt:
It is a password hashing function provided by NPM.For a secured database,the password must be hashed when storing it in a database.
I have used the Salt Hashing in my code.In salt hashing, we take the user's password and a random string of characters called Salt,hash the combined string with suitable algorithm(like HMAC SHA 256) and store it in a database.
3>We have used express.static(); to serve the static files.

4>Promise: A Promise is a value returned by an asynchronous function to indicate the completion of the processing carried out by the asynchronous function. Promises can be nested within each other to make code look better and easier to maintain when many asynchronous function need to be called at the same time.
e.g
When the data is stored in our databse,then it will give some message like data is saved or anything else  on completion of task.
