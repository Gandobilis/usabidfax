const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    id: String,
    auction_name: String,
    body_style: String,
    car_keys: String,
    color: String,
    cylinders: Number,
    doc_type: String,
    location: String,
    drive: String,
    engine_type: String,
    est_retail_value: Number,
    est_repair_value: Number,
    fuel: String,
    lot_number: Number,
    make: String,
    model: String,
    odometer: String,
    seller: String,
    condition: String,
    primary_damage: String,
    secondary_damage: String,
    transmission: String,
    vin: String,
    year: Number,
    notes: String,
    car_photos: [String], // An array of photo URLs
    sale_status: String,
    date_of_sale: String,
    purchase_price: Number,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;