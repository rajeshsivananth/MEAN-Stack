
(function () {
    const mongoose = require('mongoose');
    var config = require('./config/index')
    var app = require('./express/index')

    mongoose.connect(config.mongo.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) {
            console.log('unable to connect database', err);
        } else {
            console.log('Mongo db connection is successful.')
        }
    });

    app.listen(config.server.port, function () {
        console.log('server is running on port 5000')
    });

}())