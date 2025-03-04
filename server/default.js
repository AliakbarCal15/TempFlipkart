import products from "./constants/data.js";
import Product from "./model/product-schema.js";
import mongoose from "mongoose";

const DefaultData = async () => {
    try {
        //await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Default data inserted successfully");
    } catch (error) {
        console.log("Error while inserting default data:", error.message);
    }
};

export default DefaultData;
