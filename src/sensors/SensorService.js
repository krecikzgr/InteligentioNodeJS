

//const databaseProvider= require('../db/DatabaseProvider');

const database = require('../db/Database');
const r = require('rethinkdb');
const TABLE_NAME = database.getSensorsTable();


const getSensors = async (start, size) => {
  const connection = database.getConnection();
  const dbResult = await r.table(TABLE_NAME).run(connection);
 return dbResult.toArray();
};
const createSensor = async sensor => {
    const connection = database.getConnection();
    const result = await r.table(TABLE_NAME).insert(Object.assign(sensor, {createdAt: new Date().getTime()})).run(connection);
    return r.table(TABLE_NAME).get(result.generated_keys[0]).run(connection);
};
const getSensor = id => {
    const connection = dataBase.getConnection();
    return r.table(TABLE_NAME).get(id).run(connection);
};

module.exports = {
    getSensors,
    createSensor,
    getSensor
};
