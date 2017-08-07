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
        console.log(IN_MEMORY_DATA);
        return IN_MEMORY_DATA;
    }
};
