import express from 'express';
import {connectDB} from './config/db.js';
import path from "path";
import farmRoutes from "./routes/farmRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;


const __dirname = path.resolve();

app.use(express.json());

app.use("/api/farms",farmRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/Front-end/dist")));

    app.get("*", (req, res)=> {
        res.sendFile(path.resolve(__dirname,"Front-end","dist","index.html"));
    })
}

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port '+PORT);
});
