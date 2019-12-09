(function () {
    var config = {
        development: {
            server: {
                port: process.env.PORT || 5000,
                secret: process.env.secret || 'dev'
            },
            mongo: {
                connectionString: process.env.MongoDB || 'mongodb://localhost:27017/MeanApp'
            }
        },
        test: {
            server: {
                port: process.env.PORT || 5000,
                secret: process.env.secret || 'dev'
            },
            mongo: {
                connectionString: process.env.MongoDB || 'mongodb://localhost:27017/test'
            }
        },
        production: {
            server: {
                port: process.env.PORT || 5000,
                secret: process.env.secret || 'dev'
            },
            mongo: {
                connectionString: process.env.MongoDB || 'mongodb://localhost:27017/MeanApp'
            }
        }
    };

    module.exports = config[process.env.NODE_ENV || 'development'];
}())