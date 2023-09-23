// netlify-functions/json-server.js
const data = require('./data.json'); // Import your JSON data

exports.handler = async (event, context) => {
    const queryParams = event.queryStringParameters || {};
    const {_page, _limit} = queryParams;

    // Apply filters
    let filteredItems = data.cars

    // Apply pagination
    if (_page && _limit) {
        const startIndex = (_page - 1) * _limit;
        const endIndex = startIndex + parseInt(_limit);
        filteredItems = filteredItems.slice(startIndex, endIndex);
    }

    const headers = {
        'Access-Control-Allow-Origin': '*', // Replace with your local host URL
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
    };

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({items: filteredItems}),
    };
};
