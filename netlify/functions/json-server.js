// netlify-functions/json-server.js
const data = require('./data.json'); // Import your JSON data

exports.handler = async (event, context) => {
    const queryParams = event.queryStringParameters || {};
    const {vin, make, model, _page, _limit, _sort, _order} = queryParams;

    // Apply filters
    let filteredItems = data.cars

    if (vin) {
        filteredItems = filteredItems.filter(item => item.vin === vin);
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

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:5173/"
        },
        body: JSON.stringify({items: filteredItems}),
    };
};
