const mongoose = require("mongoose");

const products = new mongoose.Schema({
    title: String,
    price:Number,
    description:String,
    image:String,
    categoryId: String
});

module.exports = mongoose.model("products",products);