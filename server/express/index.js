(function () {
    var express = require('express');
    var bodyParser = require('body-parser')
    var path = require('path');
    var glob = require('glob');

    var config = require('./../config');
    var app = express();


    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(bodyParser.json())
    app.use(express.static('public'));
    var routeDir = './../routes/';

    glob('./server/routes/*.js', function (err, files) {
        if (err) {
            console.error(err);
        } else {
            let fileName;
            files.forEach(function (file) {
                fileName = file.substring(file.lastIndexOf('/') + 1);
                require(`${routeDir}${fileName}`)(app);
            });
        }
    });
    module.exports = app;
}())