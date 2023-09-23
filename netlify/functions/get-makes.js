// netlify-functions/get-makes.js
const data = require('./data.json'); // Import your JSON data

exports.handler = async (event, context) => {
    // Generate a list of all unique makes
    const uniqueMakes = [...new Set(data.cars.map(item => item.make))];
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Replace with your local host URL
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET',
        },
        body: JSON.stringify({ makes: uniqueMakes }),
    };
};