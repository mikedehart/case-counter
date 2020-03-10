// Local requires
const config = require('./src/conf/conf');
const app = require('./src/server');
const logger = require('./src/util/logger');

app.listen(config.port);
logger.log('API listening on localhost:' + config.port);
