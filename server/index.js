
(function () {
    const mongoose = require('mongoose');
    var config = require('./config/index')
    var app = require('./express/index')

    mongoose.connect('mongodb://localhost:27017/approval', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) {
            console.log('unable to connect database');
        }
    });

    app.listen(config.server.port, function () {
        console.log('server is running on port 5000')
    });

}())