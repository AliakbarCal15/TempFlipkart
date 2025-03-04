




import mongoose from 'mongoose';
//import dotenv from 'dotenv';

//const mongoose = require('mongoose');



export const Connection = async (MONGODB_URL) => {
    const URL = "mongodb://localhost:27017/ECOMMERCE";  

    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error while connecting to the database:", error.message);
    }
};

export default Connection;


