const {faker} = require('@faker-js/faker');
const fs = require('fs');

function generateCar() {
    const images = [];
    for (let i = 0; i < 7; i++)
        images.push('https://cdn.glitch.global/62237847-832c-4ecf-85c6-71ba709033fc/tesla-model-3-2019-5yj3e1ea9kf400861-img1.jpg?v=1695465741238');

    return {
        price: faker.helpers.rangeToNumber({min: 5000, max: 80000}),
        title: faker.lorem.sentence(),
        vin: faker.vehicle.vin(),
        auction: faker.helpers.arrayElement(['IAAI', 'Copart', 'Manheim']),
        status: faker.helpers.arrayElement(['sold', 'available', 'pending']),
        lotNumber: faker.helpers.rangeToNumber({min: 10000, max: 99999}),
        condition: faker.helpers.arrayElement(['Run and Drive', 'Non-Runner', 'Salvage']),
        damage: faker.helpers.arrayElement(['Front End', 'Rear End', 'Side Damage', 'No Damage']),
        mileage: faker.helpers.rangeToNumber({min: 1000, max: 100000}) + ' mile (Actual)',
        dateOfSale: faker.date.past().toLocaleDateString('en-US'),
        images: images
    };
}

const cars = faker.helpers.multiple(generateCar, {
    count: 20_000
});

const carsJSON = JSON.stringify({cars}, null, 2);

fs.writeFile('../../db.json', carsJSON, 'utf8', (err) => {
    if (err) {
        console.error('Error writing JSON to file:', err);
    } else {
        console.log('JSON data has been written to cars.json');
    }
});