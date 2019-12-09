(function () {
    var jwt = require('jsonwebtoken');
    var User = require('./../model/User');
    var config = require('./../config/index');

    var User = require('./../model/User');

    var userService = require('./users');

    function comparePassword(given, available) {
        return given === available;
    }


    exports.authenticate = function (options, callback) {
        var data = options.data;
        var opts = {
            username: data.username
        };
        userService.findOne(opts, function (err, user) {
            var passwordMatches;
            var token;
            if (err) {
                callback(err);
            } else if (user) {
                passwordMatches = comparePassword(data.password, user.password);
                if (passwordMatches) {
                    token = jwt.sign({
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }, config.server.secret, {
                        expiresIn: '1d'
                    });
                    callback(err, token);
                } else {

                }
            } else {
                callback({
                    message: 'Authentication is failed.'
                });
            }
        });
    }
}())