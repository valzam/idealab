var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var config = require('./config');
var allowCrossDomain = require('./src/middlewares/cors').allowCrossDomain;

const app = exports.app = express();

// Connect to database
var mongoose = require('mongoose');

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

// Global Middleware
// app.use(express.static(__dirname + '/app/public'));

app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(allowCrossDomain);

// Routes
const auth = require('./src/routes/auth');
const users = require('./src/routes/users');
const problems = require('./src/routes/problems');
const solutions = require('./src/routes/solutions');

app.use('/api/v1',auth);
app.use('/api/v1',users);
app.use('/api/v1',problems);
app.use('/api/v1',solutions);

// // Serve status files
// app.get('*', function(request, response) {
//   response.sendFile(__dirname + '/app/public/index.html');
// });

// Start Server
const server = require('http').createServer(app);

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
