// netlify-functions/json-server.js
const data = require('./data.json'); // Import your JSON data

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
};