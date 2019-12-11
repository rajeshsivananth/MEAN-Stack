(function () {
    var jwt = require('jsonwebtoken');
    // var User = require('./../model/User');
    var config = require('./../config/index');

    var userService = require('./users');

    exports.authenticate = function (options, callback) {
        var data = options.data;
        var opts = {
            q: {
                username: data.username
            }
        };
        userService.findOne(opts, function (err, user) {
            var token;
            if (err) {
                callback(err);
            } else if (user) {
                passwordMatches = user.comparePassword(data.password, function (err, passwordMatches) {
                    if (passwordMatches) {
                        token = jwt.sign({
                            _id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName
                        }, config.server.secret, {
                            expiresIn: '1d'
                        });
                        callback(err, {
                            token: token
                        });
                    } else {
                        callback({
                            reason: 'Authentication is failed.'
                        })
                    }
                });
            } else {
                callback({
                    message: 'Authentication is failed.'
                });
            }
        });
    }
}())