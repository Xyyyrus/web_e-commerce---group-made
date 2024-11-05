const mongoose = require('mongoose');

// Define a schema for the individual products in the cart
const productSchema = new mongoose.Schema({
  ProductName: { type: String, required: true },
  Details: { type: String, required: true },
  Quantity: { type: Number, required: true },
  Price: { type: Number, required: true },
  ImageUrl: { type: String, required: true },
  SellerName: { type: String, required: true },


});

// Define the main cart schema
const cartSchema = new mongoose.Schema({
  BuyerId: { type: String, required: true },
  Products: { type: [productSchema], required: true }, // Array of products
  TotalPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Cart', cartSchema);
