(function () {
    var config = {
        development: {
            server: {
                port: 5000
            },
            mongo: {
                connectionString: process.env.MongoDB || 'mongodb://localhost:27017/test'
            }
        },
        test: {
            server: {
                port: 5000
            },
            mongo: {
                connectionString: process.env.MongoDB || 'mongodb://localhost:27017/test'
            }
        },
        production: {
            server: {
                port: 5000
            },
            mongo: {
                connectionString: process.env.MongoDB || 'mongodb://localhost:27017/test'
            }
        }
    };

    module.exports = config[process.env.NODE_ENV || 'development'];
}())