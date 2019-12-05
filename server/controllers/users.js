(function () {
    var _ = require('lodash');
    var userService = require('./../services/users');


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
        console.log('req.body', req.body)
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
}());