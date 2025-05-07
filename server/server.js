import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import geminiRoute from './routes/api/gemini.js';
import dbConnection from './config/db.js';

dotenv.config(); 

const app = express();
dbConnection()

app.use(cors());
app.use(express.json()); 
app.use("/api/gemini", geminiRoute);

app.listen(5000, () => {
    console.log("Server started at PORT:5000");
});