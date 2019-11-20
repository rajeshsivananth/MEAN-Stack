
(function () {

    module.exports = function (app) {
        app.get('/', (req, res) => {
            res.status(200);
            res.send({ message: 'Thank you for visiting us. MEAN Stack.' });
        });
    };
}())