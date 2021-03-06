(function () {
    var User = require('./../model/User');

    exports.find = function (options, callback) {
        options.projection = options.projection || { password: 0 };
        User.find(options.q, options.projection, callback);
    }

    exports.findOne = function (options, callback) {
        User.findOne(options.q, callback);
    }

    exports.findOneAndUpdate = function (options, callback) {
        User.findOneAndUpdate(options.q, options.data, options.options, callback);
    }

    exports.create = function (options, callback) {
        var user = new User(options.data);
        user.save(callback)
    }

    exports.update = function (options, callback) {
        User.update(options.q, options.data, options.options, callback);
    }

    exports.remove = function (options, callback) {
        User.findOneAndRemove(options.q, callback);
    }

    async function findOne(options) {
        return await User.findOne(options.q);
    }

    exports.async = {
        findOne: findOne
    };
}())