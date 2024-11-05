const Cart = require('../models/cart');


const fetchAllProductInCart = async (req, res) => {
    const { id } = req.params;
  
    // Check if all required fields are provided
    if (!id) return res.status(400).json({ message: 'no buyer is logged in' });

  
    try {
      const foundCart = await Cart.findOne({BuyerId: id})
      if (!foundCart) return res.status(404).json({message: 'no user found'})
   
        console.log(foundCart)

      res.status(200).json({ foundCart });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  const addToCart = async (req, res) => {
    const { BuyerId, Products } = req.body;
  
    console.log(Products);
    console.log(BuyerId);
  
    // Check if all required fields are provided
    if (!BuyerId) {
      return res.status(400).json({ message: 'BuyerId is required' });
    }
    
    if (!Products) {
      return res.status(400).json({ message: 'Products field is required' });
    }
  
    // If Products is not an array, convert it to an array
    let productsArray;
    if (Array.isArray(Products)) {
      productsArray = Products; // If already an array, use it directly
    } else {
      productsArray = [Products]; // If not, create an array with the single product
    }
  
    try {
      // Find the existing cart for the BuyerId
      const existingCart = await Cart.findOne({ BuyerId });
  
      if (existingCart) {
        // If the cart exists, append new products to the existing Products array
        existingCart.Products.push(...productsArray);
  
        // Recalculate the total price
        existingCart.TotalPrice = existingCart.Products.reduce((total, product) => 
          total + (product.Price * product.Quantity), 0
        );
  
        // Save the updated cart
        await existingCart.save();
  
        return res.status(200).json({ message: 'Products added to existing cart successfully', cart: existingCart });
      } else {
        // If no cart exists, create a new one
        const newCart = new Cart({
          BuyerId,
          Products: productsArray, // Use the adjusted products array
          TotalPrice: productsArray.reduce((total, product) => 
            total + (product.Price * product.Quantity), 0
          ),
        });
  
        // Save the new cart to the database
        await newCart.save();
  
        return res.status(201).json({ message: 'Cart created successfully', cart: newCart });
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  
const checkoutCart = async (req, res) => {
    const { id } = req.params;
    const { account } = req.body; // Extract account object from request body

    // Check if the `id` parameter is provided
    if (!id) return res.status(400).json({ message: 'No buyer is logged in' });

    try {
        // Check if account object is provided
        if (!account) return res.status(400).json({ message: 'No account details provided' });

        // Find the user by `id` and update
        const updatedUser = await User.findByIdAndUpdate(id, account, { new: true });
        
        // Log the updated user
        console.log('Updated User:', updatedUser);
        if (!updatedUser) return res.status(404).json({ message: 'No user found' });

        res.status(200).json({ user: updatedUser }); // Return the updated user details
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


  module.exports = {
    fetchAllProductInCart,
    addToCart
  };
  