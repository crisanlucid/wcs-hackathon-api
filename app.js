const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
const resumeRoute = require('./routes/resume');
const indexRoute = require('./routes/index');

var errorHandler = require('errorhandler');
// const mongoose = require('mongoose');
// const dbUrl = process.env.DB_URL,
//   dbOptions = {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//   };

// mongoose.connect(dbUrl, dbOptions);
// const db = mongoose.connection;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1/resume', resumeRoute);
app.use('/', indexRoute);

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected to db');

// });

app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// error handling middleware should be loaded after the loading the routes
if (app.get('env') === 'development') {
  app.use(errorHandler())
}

var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})