const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const secret = require('../../config');

exports.isAuthenticated = expressJwt({secret: ""+secret});
