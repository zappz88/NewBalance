const server = require('./server.js');

const routes = require('./routes/routes.js');
server.use('/', routes);
