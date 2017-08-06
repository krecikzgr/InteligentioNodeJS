/**
 * @author Sven Koelpin
 */
const sensorResource = require('./sensors/SensorResource');
const server = require('./server/Server');
const database = require('./db/Database');

server.register(sensorResource);

database.init().then(() => server.start()).catch(e => {
    console.log('DB not running');
    process.exit();
});


