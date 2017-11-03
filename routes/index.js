/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();
var app = express();
var fs = require('fs');
var marked = require('marked');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Guni12',
    });
});

/* GET home page. */
router.get('/about', function(req, res) {
    res.render('about', {
        title: 'Om-sidan'
    });
});

/* GET home page. */
router.get('/report', function(req, res) {
    res.render('report', {
        title: "Redovisningarna"
    });
});

/* GET users listing. */
router.get('/kmom*', function(req, res) {
    var base = app.get("views");
    var text = req.app.locals.basedir + "/..";
    var path = req.path;

    var file = base + "/../content" + path + ".md";

    console.log(app.locals.settings);
    //res.sendFile('/../content' + path);

    fs.readFile(file, "utf8", function(err, data) {
        if (err) {
            throw err;
        }
        app.set('kmom', marked(data));
        console.log(marked(data));
        //do operation on data that generates say resultArray;
        return undefined;
    });

    console.log("items", app.get("kmom"));

    res.render('kmom', {
        content: path,
        base: base,
        text: text,
        locals: "Test",
    });
});

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

module.exports = router;
