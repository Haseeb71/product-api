const express = require("express");
const mongoose = require("mongoose");
const Categories = require("../modal/productCategorie");
const Products = require("../modal/products");

const index = async(req,res)=>{
    var allCategories = {};
     const found = await Categories.find({});
       res.send(found);
};
const product = async(req,res)=>{
    
        var allfounded = {};
        const found = await Products.find({});

      for(let i=0;i<found.length;i++){
        if(found[i].categoryId == req.params.id){
           allfounded[i] = found[i];
        } 
}

res.send(allfounded);
};

const show = async(req,res)=>{
  var foundedproduct = {};
  const found = await Products.find({});

  for(let i=0;i<found.length;i++){
    if(found[i].categoryId == req.params.id){
      foundedproduct = found[i];
    } 
}
res.send(foundedproduct);
}

module.exports = {index,product,show};
