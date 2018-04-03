/**
 * @author Sven Koelpin
 */
var mongo = require('mongodb').MongoClient;
const config = require('../config/Config');
const testData = require('./DatabaseProvider');
//const eventEmitter = require('../server/Events');

const SENSORS_TABLE = 'senso';
var url = "mongodb://localhost:27017/mydb";
let connection = null;

const createDataBase = async () => {
    db =  await  mongo.connect(url, function(err, db) {
        if (err) console.log(err);
        console.log("Database created!");
        db.close();
      });
      console.log("After everything");
};

const createTables = async () => {
    await rethink.db(config.dbName).wait().run(connection);

    const tableList = await rethink.db(config.dbName).tableList().run(connection);
    if (!tableList.find(tbl => tbl === SENSORS_TABLE)) {
        console.log('Tweets table not present. Creating it.');

        await rethink.db(config.dbName).tableCreate(SENSORS_TABLE).run(connection);
        await rethink.table(SENSORS_TABLE).wait().run(connection);
        await rethink.table(SENSORS_TABLE).insert(testData.getSensors().map(sensor => {
            const dbSensor = Object.assign({}, sensor);
            delete dbSendor.id;
            return dbSensor;
        })).run(connection);
        console.log('Tweets table and test data ready.');
    } else {
        await rethink.table(SENSORS_TABLE).wait().run(connection);
    }
};

const initDBStream = () => {
    rethink.table(SENSORS_TABLE).changes().run(connection, (err, cursor) => {
       // cursor.each((error, newData) => eventEmitter.emit('newData', newData.new_val));
    });
};

const init = async () => {
    if (connection === null) {
        // connection = await rethink.connect({
        //     host: config.dbHost,
        //     port: config.dbPort,
        //     db: config.dbName,
        //     password: config.dbPass
        // });

        await createDataBase();
        await createTables();

        initDBStream();
    }

    console.log('Database ready');
};

module.exports = {
    init,
    getConnection() {
        return connection;
    },
    getSensorsTable() {
        return SENSORS_TABLE;
    }
};
