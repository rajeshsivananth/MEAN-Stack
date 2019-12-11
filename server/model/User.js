(function () {
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');
    const SALT_WORK_FACTOR = 10;

    var User;
    var UserSchema = mongoose.Schema({
        firstName: { type: String },
        lastName: { type: String },
        username: { type: String, unique: true },
        password: { type: String },
        role: { type: String, default: 'user' }
    });

    UserSchema.pre('save', function (next) {
        var user = this;

        if (!user.isModified('password')) {
            return next();
        }

        bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    });

    UserSchema.methods.comparePassword = function (candidatePassword, callback) {
        bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
            if (err) {
                return callback(err);
            }
            callback(null, isMatch);
        });
    };

    User = mongoose.model('user', UserSchema);

    module.exports = User;
}())