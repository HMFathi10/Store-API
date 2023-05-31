const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required."]
    },
    price: {
        type: Number,
        required: [true, "Product price is required."]
    },
    company: {
        type: String,
        enum: {
            values: ["ikea", 'liddy', 'caressa', 'marcos'],
            massage: '{VALUE} is not supported.'
        },
        required: [true, "Product company is required."]
    },
    rating: {
        type: Number,
        default: 4.5
    },
    featured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;