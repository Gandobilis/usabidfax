const data = require('./data.json')

exports.handler = async () => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET'
        },
        body: JSON.stringify(Array.from(data.vehicles.map(vehicle => vehicle.make)))
    }
}