(function () {
    var config = {
        development: {
            server: {
                port: 5000
            }
        },
        test: {
            server: {
                port: 5000
            }
        },
        production: {
            server: {
                port: 5000
            }
        }
    };

    module.exports = config[process.env.NODE_ENV || 'development'];
}())