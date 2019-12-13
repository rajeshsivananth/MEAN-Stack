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

    async function auth(req, res, next) {
        const authorization = req.header('Authorization');
        const token = typeof authorization === 'string' ? authorization.replace('Bearer ', '') : undefined;

        if (token) {
            const data = jwt.verify(token, config.server.secret);
            try {
                const user = await userService.async.findOne({
                    q: {
                        _id: data._id
                    }
                });
                if (!user) {
                    return res.status(401).send({ error: 'Authentication is failed.' })
                }
                req.user = user
                req.token = token
                next();
            } catch (error) {
                res.status(401).send({ error: 'Not authorized to access this resource' });
            }
        } else {
            return res.status(401).send({ error: 'Authentication is failed.' })
        }
    }

    exports.auth = auth;
}())