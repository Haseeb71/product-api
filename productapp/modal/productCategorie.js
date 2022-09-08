const mongoose = require("mongoose");

 const productCategorySchema = new mongoose.Schema({
    id:Number,
    name:String,
 });

module.exports = mongoose.model("productCategories",productCategorySchema);