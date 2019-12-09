
(function () {
    var users = require('./../controllers/users');

    module.exports = function (app) {
        app.get('/', (req, res) => {
            res.status(200);
            res.send({ message: 'Thank you for visiting us. MEAN Stack.' });
        });
        app.post('/api/login', users.authenticate);
        app.get('/api/users', users.getUsers);
        // app.post('/api/users', users.createUser);
    };
}())