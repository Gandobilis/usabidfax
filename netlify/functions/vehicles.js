const data = require('./data.json');

exports.handler = async (event) => {
    const {page, limit} = event['queryStringParameters']
    let vehicles = data.vehicles

    if (page && limit) {
        const startIndex = (page - 1) * limit
        const endIndex = startIndex + parseInt(limit)
        vehicles = data.vehicles.slice(startIndex, endIndex)
    }

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5173, https://usabidfax.com',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET'
        },
        body: JSON.stringify(vehicles)
    }
}
