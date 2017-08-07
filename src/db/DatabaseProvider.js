const IN_MEMORY_DATA = [
    {
        id: 1,
        sensorName: 'Kuchnia'
    },
    {
        id: 2,
        sensorName: 'Przedpokój'
    },
        {
        id: 3,
        sensorName: 'Łazienka'
    }
];


module.exports = {
    getSensors() {
        return IN_MEMORY_DATA;
    }
};
