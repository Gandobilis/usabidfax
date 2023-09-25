const mongoose = require('mongoose');
const { Photo, Details, Car } = require('../models'); // Replace with the correct path to your models

mongoose.connect('mongodb+srv://lashadeveloper:OFmIpLbb7NNuB3j9@cluster0.ka6csox.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', async () => {
    console.log('Connected to MongoDB');

    // Create a function to generate random data for each item
    function generateRandomData(index) {
        return {
            purchase_price: Math.floor(Math.random() * 50000 + 10000),
            make: 'Tesla',
            model: 'Model 3',
            year: 2020,
            color: 'Black',
            engine_type: 'Electric',
            vin: `VIN${index}`,
            auction_name: 'Some Auction',
            sale_status: 'For Sale',
            lot_number: index,
            condition: 'Used',
            primary_damage: 'Front-end damage',
            odometer: '50000 miles',
            date_of_sale: '2023-09-26',
            details: null,
            photos: [],
        };
    }

    try {
        // Insert 100 items into the database
        for (let i = 0; i < 100; i++) {
            const randomCarData = generateRandomData(i);

            // Create a new car document
            const car = new Car(randomCarData);

            // Save the car document
            await car.save();

            // Generate random photo URLs and save them
            for (let j = 2; j <= 8; j++) {
                const photo = new Photo({
                    url: `/vehicles/tesla-model-3-2020-5yj3e1ea2lf745165-img${j}.jpg`,
                });
                await photo.save();
                car.photos.push(photo);
            }

            // Generate random details and save them
            const details = new Details({
                seller: 'John Doe',
                doc_type: 'Title',
                location: 'New York',
                secondary_damage: 'None',
                est_retail_value: Math.floor(Math.random() * 50000 + 20000),
                est_repair_value: Math.floor(Math.random() * 20000 + 5000),
                transmission: 'Automatic',
                drive: 'AWD',
                car_keys: 'Yes',
                fuel: 'Electric',
                notes: 'Some notes about the car',
                main_photo: `/vehicles/tesla-model-3-2020-5yj3e1ea2lf745165-img1.jpg`,
            });
            await details.save();
            car.details = details;

            // Save the updated car document with references to details and photos
            await car.save();
        }
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        // Close the database connection when done
        db.close();
    }
});