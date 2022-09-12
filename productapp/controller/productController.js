const express = require("express");
const mongoose = require("mongoose");
const Categories = require("../modal/productCategorie");
const Products = require("../modal/products");

// To Show category Page 
const index = async (req, res) => {
  const found = await Categories.find({});
  res.send(found);
};

// To show all products of specific Category
const product = async (req, res) => {
   const found = await Products.find({}).where('categoryId').equals(req.params.id);
  res.send(found);
};

// To Show individual Product details
const show = async (req, res) => {
  const found = await Products.findById(req.params.id);
  res.send(found);
}

module.exports = { index, product, show };
