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

/* GET about page. */
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

/* GET kmom with .md */
router.get('/kmom*', function(req, res) {
    var base = app.get("views");
    var text = req.app.locals.basedir + "/..";
    var path = req.path;

    var file = base + "/../content" + path + ".md";

    fs.readFile(file, "utf8", function(err, data) {
        if (err) {
            throw err;
        }
        app.set('kmom', marked(data));
        return undefined;
    });

    res.render('kmom', {
        content: path,
        base: base,
        text: text,
        locals: "Test",
    });
});

module.exports = router;
