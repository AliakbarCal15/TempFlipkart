import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import router from './routes/route.js'; 
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/ECOMMERCE";
Connection(MONGODB_URL);

const PORT = 8000;



app.listen(PORT, () =>  console.log(`Server is running on port ${PORT} `));   
DefaultData();