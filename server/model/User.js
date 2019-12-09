(function () {
    const mongoose = require('mongoose');

    var User;
    var userSchema = mongoose.Schema({
        firstName: { type: String },
        lastName: { type: String },
        username: { type: String, unique: true },
        password: { type: String },
        role: { type: String, default: 'user' }
    });

    User = mongoose.model('user', userSchema);

    module.exports = User;
}())