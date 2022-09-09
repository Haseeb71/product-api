const express = require("express");
const mongoose = require("mongoose");
const Categories = require("../modal/productCategorie");
const Products = require("../modal/products");

const index = async (req, res) => {
  const found = await Categories.find({});
  res.send(found);
};
const product = async (req, res) => {

   const found = await Products.find({}).where('categoryId').equals(req.params.id);
  res.send(found);
};

const show = async (req, res) => {

  const found = await Products.findById(req.params.id);
  res.send(found);
}

module.exports = { index, product, show };
