require("dotenv").config();
const connectDB = require("./db/connect");
const jsonProducts = require("./products.json");
const Product = require("./models/product");

const start = async () => {
    try {
        //Connect Datebase
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("Success...");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


start();