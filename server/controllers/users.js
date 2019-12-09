(function () {
    var _ = require('lodash');
    var userService = require('./../services/users');
    var authService = require('./../services/auth');

    exports.getUsers = function (req, res) {
        userService.find({
            q: {}
        }, function (err, data) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.status(200).send(data);
            }
        });
    }

    exports.createUser = function (req, res) {
        userService.create({
            data: req.body
        }, function (err, data) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.status(201).send(data);
            }
        });
    }

    exports.authenticate = function (req, res) {
        authService.authenticate({
            data: req.body
        }, function (err, data) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.status(201).send(data);
            }
        });
    }
}());