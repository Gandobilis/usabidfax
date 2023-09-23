const {faker} = require('@faker-js/faker');
const fs = require('fs');

function generateCar() {
    const images = [];
    for (let i = 0; i < 7; i++)
        images.push('https://cdn.glitch.global/62237847-832c-4ecf-85c6-71ba709033fc/tesla-model-3-2019-5yj3e1ea9kf400861-img1.jpg?v=1695465741238');

    return {
        price: faker.helpers.rangeToNumber({min: 5000, max: 80000}),
        title: faker.lorem.sentence(),
        status: faker.helpers.arrayElement(['sold', 'available', 'pending']),
        auction: faker.helpers.arrayElement(['IAAI', 'Copart', 'Manheim']),
        lotNumber: faker.helpers.rangeToNumber({min: 10000, max: 99999}),
        dateOfSale: faker.date.past().toLocaleDateString('en-US'),
        year: faker.date.past().getFullYear(),
        vin: faker.vehicle.vin(),
        condition: faker.helpers.arrayElement(['Stationary', 'Run and Drive', 'Non-Runner', 'Salvage']),
        engine: faker.lorem.word().toUpperCase() + ' ' + faker.lorem.word().toUpperCase() + ' ' + faker.lorem.word().toUpperCase(),
        mileage: faker.helpers.rangeToNumber({min: 1000, max: 100000}) + ' mile (Actual)',
        seller: faker.company.name(),
        documents: faker.lorem.word().toUpperCase() + ' (' + faker.location.state() + ')',
        location: faker.location.state() + ' (' + faker.location.state({abbreviated: true}) + ')',
        primaryDamage: faker.helpers.arrayElement(['Front End', 'Rear End', 'Side Damage', 'No Damage']),
        secondaryDamage: 'Not specified',
        estimatedRetailValue: faker.helpers.rangeToNumber({min: 10000, max: 50000}),
        estimatedRepairCost: faker.helpers.rangeToNumber({min: 10000, max: 50000}),
        transmission: faker.helpers.arrayElement(['Automatic', 'Manual', 'Unknown']),
        bodyColor: faker.color.human(),
        drive: faker.helpers.arrayElement(['Front Wheel Drive', 'Rear Wheel Drive', 'All Wheel Drive']),
        fuel: faker.helpers.arrayElement(['Gasoline', 'Diesel', 'Electric']),
        keys: faker.helpers.arrayElement(['Present', 'Not Present']),
        notes: faker.lorem.sentence(),
        images: images,
    };
}

const cars = faker.helpers.multiple(generateCar, {
    count: 33
});

const carsJSON = JSON.stringify({cars}, null, 2);

fs.writeFile('../../netlify/functions/data.json', carsJSON, 'utf8', (err) => {
    if (err) {
        console.error('Error writing JSON to file:', err);
    } else {
        console.log('JSON data has been written to cars.json');
    }
});