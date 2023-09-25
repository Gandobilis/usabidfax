import express, {Router} from 'express';
import serverless from 'serverless-http';
import data from "./data.json";
import fs from "fs/promises";

const dataPath = 'netlify/functions/data.json'

const api = express();

const router = Router();

router.get('/cars', (req, res) => {
    const {page, limit} = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const cars = data.vehicles.slice(startIndex, endIndex);

    res.status(200).json(cars);
});

router.get('/makes', (req, res) => {
    const cars = new Set(data.vehicles.map(car => car.make));

    res.status(200).json(Array.from(cars));
});
router.get('/models/:make', (req, res) => {
    const {make} = req.params;
    const cars = data.vehicles.filter(vehicle => vehicle.make = make).map(vehicle => vehicle.model);

    res.status(200).json(cars);
});

router.get('/vin/:vin', (req, res) => {
    const {vin} = req.params;
    const car = data.vehicles.find((vehicle) => vehicle.vin === vin);

    if (!car) {
        return res.status(404).json({message: 'Car not found'});
    }

    res.status(200).json(car);
});

router.get('/make/:make', (req, res) => {
    const {make} = req.params;
    const cars = data.vehicles.filter((vehicle) => vehicle.make === make);

    if (cars.length === 0) {
        return res.status(404).json({message: 'No cars found with this make'});
    }

    res.status(200).json(cars);
});

router.get('/model/:model', (req, res) => {
    const {model} = req.params;
    const cars = data.vehicles.filter((vehicle) => vehicle.model === model);

    if (cars.length === 0) {
        return res.status(404).json({message: 'No cars found with this model'});
    }

    res.status(200).json(cars);
});

const adminApiKey = process.env.VITE_ADMIN_API_KEY; // process.env.NETLIFY_API_KEY

// Middleware to check API key
const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== adminApiKey) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    next(); // Continue to the next middleware or route handler
};

// Apply the checkApiKey middleware to all routes in this router
router.use(checkApiKey);

router.get('/all', async (req, res) => {
    // Check if the API key matches
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== adminApiKey) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const rawData = await fs.readFile(dataPath, 'utf-8');
        const cars = JSON.parse(rawData).vehicles;

        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error', error: error.message});
    }
});

router.post('/create', async (req, res) => {
    // Check if the API key matches
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== adminApiKey) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        let newCar = req.body;
        const rawData = await fs.readFile(dataPath, 'utf-8');
        const data = JSON.parse(rawData);

        newCar = JSON.parse(newCar);
        newCar.id = 5604;
        data.vehicles.push(newCar);
        await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf-8');

        res.status(201).json({message: 'Car created successfully', car: newCar});
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error', error: error.message});
    }
});

router.put('/update/:vin', async (req, res) => {
    try {
        const {vin} = req.params;
        const updatedCar = req.body;
        const rawData = await fs.readFile(dataPath, 'utf-8');
        const data = JSON.parse(rawData);

        const carIndex = data.vehicles.findIndex((vehicle) => vehicle.vin === vin);

        if (carIndex === -1) {
            return res.status(404).json({message: 'Car not found'});
        }

        data.vehicles[carIndex] = {...data.vehicles[carIndex], ...updatedCar};
        await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf-8');

        res.status(200).json({message: 'Car updated successfully', car: data.vehicles[carIndex]});
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error', error: error.message});
    }
});

router.delete('/delete/:vin', async (req, res) => {
    try {
        const {vin} = req.params;
        const rawData = await fs.readFile(dataPath, 'utf-8');
        const data = JSON.parse(rawData);

        const carIndex = data.vehicles.findIndex((vehicle) => vehicle.vin === vin);

        if (carIndex === -1) {
            return res.status(404).json({message: 'Car not found'});
        }

        data.vehicles.splice(carIndex, 1);
        await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf-8');

        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error', error: error.message});
    }
});

api.use('/api/', router);

export const handler = serverless(api);