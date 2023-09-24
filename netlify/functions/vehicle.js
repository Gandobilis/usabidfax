const data = require('./data.json')

exports.handler = async (event) => {
    const {vin} = event['queryStringParameters']
    const vehicle = data.vehicles.find(item => item.vin === vin)

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5173, https://usabidfax.com',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET'
        },
        body: JSON.stringify(vehicle)
    }
}