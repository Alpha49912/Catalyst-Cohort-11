const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//setting up the mongoose
let config = require('./config/database');
require('dotenv').config();

const homeroutes = require('./routes/homeroutes');
const registerroutes = require('./routes/registerroutes');

//instatiating the express server
const app = express();


//connect mongoose
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', function(err){
  console.error(err);
});

//express sesssion
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

// views settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');


//setting up middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);

// routes
app.use('/', homeroutes);
app.use('/register', registerroutes);

// handling non existing routes
app.get('*', (req, res)=> {
  res.status(404).send('opps, Wrong area sebo!')
});

// server
app.listen(5000, ()=> console.log("Listening on Port 5000"));




