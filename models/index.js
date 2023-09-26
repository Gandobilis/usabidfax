const {mongoose} = require('mongoose')

const photoSchema = new mongoose.Schema({
    url: String
})

const detailsSchema = new mongoose.Schema({
    seller: String,
    doc_type: String,
    location: String,
    secondary_damage: String,
    est_retail_value: Number,
    est_repair_value: Number,
    transmission: String,
    drive: String,
    car_keys: String,
    fuel: String,
    notes: String,
})

const carSchema = new mongoose.Schema({
    purchase_price: Number,
    make: String,
    model: String,
    year: Number,
    color: String,
    engine_type: String,
    vin: String,
    auction_name: String,
    sale_status: String,
    lot_number: Number,
    condition: String,
    primary_damage: String,
    odometer: String,
    date_of_sale: String,
    main_photo: String,
    details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Details',
    },
    photos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Photo',
        },
    ]
})

const Photo = mongoose.model('Photo', photoSchema)
const Details = mongoose.model('Details', detailsSchema)
const Car = mongoose.model('Car', carSchema)

module.exports = {Photo, Details, Car}