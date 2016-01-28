const config = require('../../config');

exports.allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.APP_URL);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();
};
