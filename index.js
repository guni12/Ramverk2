#!/usr/bin/env node
/*jshint esversion: 6 */
"use strict";

var index = require('./routes/index');
var users = require('./routes/users');

// Create the app objekt
var express = require('express');
const path = require('path');
var portenv = process.env.DBWEBB_PORT;
var app = express();

//var sess;

console.log("portenv", portenv);

var port = typeof portenv !== 'undefined' ? portenv : 1337;


var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

app.locals.basedir = app.get('views');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(session({ secret: '$#%!@#@@#SSDASASDVV@@@@', key: 'sid'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
var staticFiles = path.join(__dirname, "public");

app.use(express.static(staticFiles));

app.use('/', index);
app.use('/users', users);


// Start up server
console.log("Express is ready. Listens at port " + port);
app.listen(port);

module.exports = app;

