const User = require('../models/User');
const bcrypt = require('bcrypt');

// @desc Login
// @route POST /auth
// @access Public
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser) {
    return res.status(400).json({ message: 'No account found' });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match)
    return res.status(400).json({ message: 'Password does not match' });

  res.status(200).json({ message: 'Login successfully', user: foundUser });
};

const registerBuyer = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if all required fields are provided
  if (!email || !password || !username) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if a user with the given email already exists
    const foundUser = await User.findOne({ email }).exec();
    if (foundUser) {
      return res.status(409).json({ message: 'Email is already in use' }); // Conflict
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user with accountType as "buyer"
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      accountType: 'buyer',
    });

    // Save the new user to the database
    await newUser.save();

    res
      .status(200)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
  registerBuyer,
};
