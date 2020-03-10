// Local requires
const config = require('./src/conf/conf');
const app = require('./src/server');

app.listen(config.port);
console.log('API listening on localhost:' + config.port);
