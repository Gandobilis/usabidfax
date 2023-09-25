import express from 'express'
import serverless from 'serverless-http'
import mongoose from 'mongoose'

const {Photo, Details, Car} = require('../../models')
const api = express()
const router = express.Router()
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

const handleErrors = (res, error) => {
    console.error('Error:', error)
    res.status(500).json({error: 'Internal Server Error'})
}

const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({message: 'Invalid ObjectID'})
    }
    next()
}

router.get('/cars', async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 9

    const skip = (page - 1) * limit

    try {
        const totalCars = await Car.countDocuments()
        const totalPages = Math.ceil(totalCars / limit)

        const cars = await Car.find().skip(skip).limit(limit)

        res.json({
            data: cars,
            currentPage: page,
            totalPages: totalPages
        })
    } catch (error) {
        handleErrors(res, error)
    }
})

router.get('/car/:id', validateObjectId, async (req, res) => {
    const {id} = req.params
    try {
        const vehicle = await Car.findById(id).populate('photos').populate('details').exec()
        if (!vehicle) {
            return res.status(404).json({message: 'Car not found'})
        }
        res.json(vehicle)
    } catch (error) {
        handleErrors(res, error)
    }
})

router.get('/cars/:vin', async (req, res) => {
    const {vin} = req.params
    try {
        const vehicle = await Car.find({vin}).populate('photos').populate('details').exec()
        if (!vehicle) {
            return res.status(404).json({message: 'Car not found'})
        }
        res.json(vehicle)
    } catch (error) {
        handleErrors(res, error)
    }
})

router.get('/makes', async (req, res) => {
    try {
        const makes = await Car.distinct('make').exec()
        res.json(makes)
    } catch (error) {
        handleErrors(res, error)
    }
})

router.get('/models/:make', async (req, res) => {
    const {make} = req.params
    try {
        const models = await Car.distinct('model', {make}).exec()
        res.json(models)
    } catch (error) {
        handleErrors(res, error)
    }
})

// // POST /api/cars
// router.post('/cars', async (req, res) => {
//     const {vin, make, model, year, color, engine_type} = req.body;
//     try {
//         const vehicle = new Car({vin, make, model, year, color, engine_type});
//         await vehicle.save();
//         res.status(201).json(vehicle);
//     } catch (error) {
//         handleErrors(res, error);
//     }
// });
//
// // PUT /api/cars/:id
// router.put('/cars/:id', validateObjectId, async (req, res) => {
//     const {id} = req.params;
//     const update = req.body;
//     try {
//         const updatedCar = await Car.findByIdAndUpdate(id, update, {new: true}).exec();
//         if (!updatedCar) {
//             return res.status(404).json({message: 'Car not found'});
//         }
//         res.json(updatedCar);
//     } catch (error) {
//         handleErrors(res, error);
//     }
// });
//
// // DELETE /api/cars/:id
// router.delete('/cars/:id', validateObjectId, async (req, res) => {
//     const {id} = req.params;
//     try {
//         const deletedCar = await Car.findByIdAndRemove(id).exec();
//         if (!deletedCar) {
//             return res.status(404).json({message: 'Car not found'});
//         }
//         res.status(204).end(); // No content
//     } catch (error) {
//         handleErrors(res, error);
//     }
// });

api.use('/api/', router)

export const handler = serverless(api)