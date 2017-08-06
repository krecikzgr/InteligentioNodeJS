/**
 * @author Sven Koelpin
 */

const sensorsService = require("./SensorService");



module.exports = server => {
    server.get('\sensors', (req, res, next) => {
        //TODO 
        
        // - read page and size from query parameters (hint: req.params)
        // - provide default values if parameters are not set (1 ist default for page, 10 for size)
        // - use parseInt(value) to parse the page & size parameters to numbers!
        // - don't forget to register the queryParser-middleware in Server.js
        const page =  parseInt(req.params.page);
        const size = parseInt(req.params.size);

        const start = (page - 1) * size;

        const allSensors =sensorsService.getSensors(); //TODO use tweetservice, pass start + size as params
        res.send(allSensors);
        next();
    });
};
