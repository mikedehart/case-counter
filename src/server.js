/*
	Main starting point of the API server
		- called from index.js
*/

const express = require('express');

// Locals
const config = require('./conf/conf');

// Routes
const api = require('./api/api');

// Main app
const app = express();

// Connect to database
// require('mongoose').connect(config.db.url, config.db.options, function(err) {
// 	if(err) {
// 		console.error(err);
// 	}
// });

// set up app middleware
require('./util/middleware')(app);

// Routes
app.use('/api', api);



// Final error handling
app.use(function(err, req, res, next) {
	if(err.name === 'UnauthorizedError') {
		console.error(err.stack);
		res.status(401).send('Invalid token sent!');
		return;
	} else {
		console.error(err.stack);
		res.status(500).send(err.stack);
		return;
	}
});

module.exports = app;