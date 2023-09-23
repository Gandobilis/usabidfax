// netlify-functions/get-element-by-id.js
const data = require('./data.json'); // Import your JSON data

exports.handler = async (event, context) => {
    const queryParams = event.queryStringParameters || {};
    const { id } = queryParams;

    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Missing "id" parameter' }),
        };
    }

    // Find the element by ID
    const element = data.cars.find(item => item.id === id);

    if (!element) {
        return {
            statusCode: 404,
            body: JSON.stringify({message: 'Element not found'}),
        };
    }

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Replace with your local host URL
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET',
        },
        body: JSON.stringify({element}),
    };
};