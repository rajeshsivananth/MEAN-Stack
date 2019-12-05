(function () {
    var User = require('./../model/User');

    exports.find = function (options, callback) {
        User.find(options.q, callback);
    }

    exports.findOne = function (options, callback) {
        User.findOne(options.q, callback);
    }

    exports.findOneAndUpdate = function (options, callback) {
        User.findOneAndUpdate(options.q, options.data, options.options, callback);
    }

    exports.create = function (options, callback) {
        User.create(options.data, callback);
    }

    exports.update = function (options, callback) {
        User.update(options.q, options.data, options.options, callback);
    }

    exports.remove = function (options, callback) {
        User.findOneAndRemove(options.q, callback);
    }
}())