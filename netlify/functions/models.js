const data = require('./data.json')

exports.handler = async (event) => {
    const {make} = event['queryStringParameters']

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5173, https://usabidfax.com',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET'
        },
        body: JSON.stringify(data.vehicles.filter(vehicle => vehicle.make === make).map(vehicle => vehicle.model))
    }
}