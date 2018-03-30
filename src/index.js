/**
 * @author Sven Koelpin
 */
const sensorResource = require('./sensors/SensorResource');
const server = require('./server/Server');


server.register(sensorResource);

server.start();


