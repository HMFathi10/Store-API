// console.log('04 Store API')

require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const connectDB = require("./db/connect");
const productsRoutes = require("./routes/products");

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Store API</h1><a href='/api/v1/proudcts'>Proudcts</a>");
});

app.use('/api/v1/products', productsRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        //connect DB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening port: ${port}`));
    } catch (error) {
        console.log(error);
    }
}


start();