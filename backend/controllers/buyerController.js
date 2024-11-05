const User = require('../models/User');


const fetchBuyerById = async (req, res) => {
    const { id } = req.params;
  
    // Check if all required fields are provided
    if (!id) return res.status(400).json({ message: 'no buyer is logged in' });

  
    try {
      const foundUser = await User.findById(id)
      if (!foundUser) return res.status(404).json({message: 'no user found'})
   

      res.status(200).json({ user: foundUser });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  
const updateBuyerById = async (req, res) => {
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
    fetchBuyerById,
    updateBuyerById
  };
  