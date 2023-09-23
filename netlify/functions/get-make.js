// netlify-functions/get-models.js
const data = require('./data.json'); // Import your JSON data

exports.handler = async (event, context) => {
    const queryParams = event.queryStringParameters || {};
    const {make} = queryParams;

    if (!make) {
        return {
            statusCode: 400,
            body: JSON.stringify({message: 'Missing "make" parameter'}),
        };
    }

    const filteredModels = data.cars
        .filter(item => item.make === make)
        .map(item => item.model);

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Replace with your local host URL
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET',
        },
        body: JSON.stringify({models: filteredModels}),
    };
};