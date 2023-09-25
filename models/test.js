const { Photo, Details, Car } = require('./index'); // Replace with the correct path to your models

const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect('mongodb+srv://lashadeveloper:OFmIpLbb7NNuB3j9@cluster0.ka6csox.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Create a new Photo document
const photo = new Photo({
    url: 'https://example.com/photo1.jpg',
});

// Create a new Details document
const details = new Details({
    seller: 'John Doe',
    doc_type: 'Title',
    // Add other details as needed
});

// Create a new Car document and associate it with the Photo and Details
const car = new Car({
    purchase_price: 20000,
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
    engine_type: 'V6',
    vin: '1234567890',
    auction_name: 'Auto Auction Inc.',
    sale_status: 'Sold',
    lot_number: 123,
    condition: 'Used',
    primary_damage: 'Front-end',
    odometer: '50,000 miles',
    date_of_sale: '2023-09-25',
    details: details._id, // Reference to Details
    photos: [photo._id], // Reference to Photo (one-to-many)
});

// Save the documents to the database
Promise.all([photo.save(), details.save(), car.save()])
    .then(() => {
        console.log('Documents saved successfully.');
        // Close the database connection when done
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error saving documents:', error);
        mongoose.connection.close();
    });