import express from 'express';
import {connectDB} from './config/db.js';

import farmRoutes from "./routes/farmRoutes.js";

const app = express()

app.use(express.json());

app.use("/api/farms",farmRoutes);

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});
