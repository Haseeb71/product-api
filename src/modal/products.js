const mongoose = require("mongoose");

const products = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("products", products);