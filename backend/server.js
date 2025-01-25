import express from 'express';
import {connectDB} from './config/db.js';
import Farm from "./models/farm.js";

const app = express()

app.use(express.json());

app.post("/api/farms", async (req,res)=> {
    const farm = req.body;

    if(!farm.name || !farm.location || !farm.size || !farm.image){
        return res.status(400).json({success:false, message: "Please provide all the required fields."});
    }

    const newFarm = new Farm(farm);

    try {
        await newFarm.save();
        res.status(201).json({success: true, data: newFarm});
    } catch (error) {
        console.error("Error creating the farm:",error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
});

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});
