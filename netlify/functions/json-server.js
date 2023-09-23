// netlify-functions/json-server.js
const data = require('./data.json'); // Import your JSON data

exports.handler = async (event, context) => {
    const queryParams = event.queryStringParameters || {};
    const {id, make, model, _page, _limit, _sort, _order} = queryParams;

    // Apply filters
    let filteredItems = data.cars

    if (id) {
        const item = filteredItems.find(item => item.id === id);
        if (item) {
            // If an ID is provided and found, return that specific item
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({item}),
            };
        } else {
            // If the ID is not found, return a 404 response
            return {
                statusCode: 404,
                body: JSON.stringify({message: 'Item not found'}),
            };
        }
    }

    // if (make) {
    //     filteredItems = filteredItems.filter(item => item.make === make);
    // }

    if (model) {
        filteredItems = filteredItems.filter(item => item.model === model);
    }

    // Apply sorting
    if (_sort) {
        const order = _order === 'desc' ? -1 : 1;
        filteredItems.sort((a, b) => (a[_sort] > b[_sort] ? order : -order));
    }

    // Apply pagination
    if (_page && _limit) {
        const startIndex = (_page - 1) * _limit;
        const endIndex = startIndex + parseInt(_limit);
        filteredItems = filteredItems.slice(startIndex, endIndex);
    }

    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173', // Replace with your local host URL
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    };

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({items: filteredItems}),
    };
};
