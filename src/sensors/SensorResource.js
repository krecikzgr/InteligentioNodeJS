/**
 * @author Sven Koelpin
 */

const sensorsService = require("./SensorService");



module.exports = server => {
    server.get('\sensors', async (req, res, next) => {
        const page =  parseInt(req.params.page);
        const size = parseInt(req.params.size);   
        const start = (page - 1) * size;
        const allSensors = await sensorsService.getSensors(page,size); //TODO use tweetservice, pass start + size as params
        res.send(allSensors);
        next();
    });
    server.post('sensor', async (req, res, next) => {
            const sensor = await sensorsService.createSensor(req.body);
            res.send(201, sensor);
            next();
        }
    );

};
