/*
	Main starting point of the API server
		- called from index.js
*/

const express = require('express');

// Locals
const config = require('./conf/conf');
const logger = require('./util/logger');

// Main app
const app = express();

// Connect to database
require('mongoose').connect(config.db.url, config.db.options, function(err) {
	if(err) {
		logger.error(err);
	}
});

// set up app middleware
require('./util/middleware')(app);

// Routes


// Final error handling
app.use(function(err, req, res, next) {
	if(err.name === 'UnauthorizedError') {
		logger.error(err.stack);
		res.status(401).send('Invalid token sent!');
		return;
	} else {
		logger.error(err.stack);
		res.status(500).send(err);
		return;
	}
});

module.exports = app;