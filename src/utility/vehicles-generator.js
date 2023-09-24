const {faker} = require('@faker-js/faker')
const fs = require('fs')

function generateVehicle() {
    const cylinders = () => {
        const rand = faker.number.int({min: 4, max: 12})
        return rand % 2 === 0 ? rand : rand + 1
    }

    const car_photos = [];
    for (let i = 1; i <= 8; i++) {
        car_photos.push(`/vehicles/tesla-model-3-2020-5yj3e1ea2lf745165-img${i}.jpg`);
    }

    return {
        id: String(faker.number.bigInt()),
        auction_name: faker.helpers.arrayElement(['IAAI', 'Copart']),
        body_style: faker.vehicle.type(),
        car_keys: faker.helpers.arrayElement(['YES', 'NO', null]),
        color: faker.vehicle.color(),
        cylinders: cylinders(),
        doc_type: null,
        location: `${faker.location.state()} (${faker.location.state({abbreviated: true})}`,
        drive: faker.helpers.arrayElement(['Front Wheel Drive', 'Rear Wheel Drive', 'All Wheel Drive', '4 Wheel Drive', null]),
        engine_type: `${faker.number.float({min: 2, max: 6, precision: 0.1})}L ${cylinders()}`,
        est_retail_value: faker.helpers.rangeToNumber({min: 500, max: 100_000}),
        est_repair_value: faker.helpers.rangeToNumber({min: 500, max: 100_000}),
        fuel: faker.vehicle.fuel(),
        lot_number: faker.helpers.rangeToNumber({min: 10_000_000, max: 99_999_999}),
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        odometer: faker.helpers.rangeToNumber({
            min: 0,
            max: 500_000
        }) + ` miles (${faker.helpers.arrayElement(['Actual', 'Not Actual', 'Exempt', 'Inoperable'])})`,
        seller: faker.company.name(),
        condition: faker.helpers.arrayElement(['Stationary', 'Run and Drive', 'Non-Runner', 'Salvage', null]),
        primary_damage: faker.helpers.arrayElement(['Front End', 'Rear End', 'Side Damage', 'No Damage', null]),
        secondary_damage: null,
        transmission: faker.helpers.arrayElement(['Automatic', 'Manual', null]),
        vin: faker.vehicle.vin(),
        year: faker.date.past().getFullYear(),
        notes: null,
        car_photos,
        sale_status: faker.helpers.arrayElement(['sold', 'on approval', 'timed']),
        date_of_sale: faker.date.past().toLocaleDateString(),
        purchase_price: faker.helpers.rangeToNumber({min: 5000, max: 80000}),
    }
}

const vehicles = faker.helpers.multiple(generateVehicle, {
    count: 100
});

const carsJSON = JSON.stringify({vehicles}, null, 2);

fs.writeFile('../../netlify/functions/data.json', carsJSON, 'utf8', (err) => {
    if (err) {
        console.error('Error writing JSON to file:', err);
    } else {
        console.log('JSON data has been written to cars.json');
    }
});