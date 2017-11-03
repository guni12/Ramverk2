#!/usr/bin/env node
/*jshint esversion: 6 */
"use strict";

var index = require('./routes/index');
var users = require('./routes/users');
//var fs = require('fs'); // this engine requires the fs module

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

/*
app.engine('md', function (filePath, options, callback) { // define the template engine
    fs.readFile(filePath, function (err, content) {
        if (err) {
            return callback(err);
        }
        // this is an extremely simple template engine
        var rendered = content.toString().replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>');

        return callback(null, rendered);
    });
});

app.set('view engine', 'md'); // register the template engine*/
/*
// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last
app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});

// Note the error handler takes four arguments
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    err.status = err.status || 500;
    res.status(err.status);
    res.render("error", {
        error: err
    });
});
*/


// Start up server
console.log("Express is ready. Listens at port " + port);
app.listen(port);

module.exports = app;

