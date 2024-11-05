const User = require('../models/User');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

// @desc Get all users with selected fields (username, email, account type, status)
// @route GET /admin/users
// @access Private (Admin only)
const getAllUsers = async (req, res) => {
  const users = await User.find()
    .select('username email accountType status')
    .lean();

  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' });
  }

  res.status(200).json(users);
};

// @desc Perform an action on a user (suspend, approve, delete, warn) and update status
// @route POST /admin/users/:userId/action
// @access Private (Admin only)
const performUserAction = async (req, res) => {
  const { action, notes } = req.body;
  const targetUserId = req.params.userId;

  const user = await User.findById(targetUserId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  let updatedStatus;
  switch (action) {
    case 'suspend':
      updatedStatus = 'Suspended';
      break;
    case 'approve':
      updatedStatus = 'Verified';
      break;
    case 'deleted':
      updatedStatus = 'Deleted';
      break;
    case 'warn':
      // Additional warning logic can go here if needed
      break;
    default:
      return res.status(400).json({ message: 'Invalid action' });
  }

  if (updatedStatus) user.status = updatedStatus;
  await user.save();

  // admin.userManagement.push({
  //   action,
  //   userId: targetUserId,
  //   notes,
  // });

  res.json({
    message: `Action '${action}' performed on user ${user.username}`,
  });
};

// @desc Get user details and admin's action history on that user
// @route GET /admin/users/:userId
// @access Private (Admin only)
const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id)
    .select('username email accountType status')
    .lean();
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // const adminActions = await Admin.findOne({
  //   'userManagement.userId': req.params.userId,
  // })
  //   .select('userManagement')
  //   .populate({
  //     path: 'userManagement.userId',
  //     select: 'username email accountType status',
  //   })
  //   .lean();

  // const actionHistory = adminActions?.userManagement?.filter(
  //   (action) => action.userId.toString() === req.params.userId
  // );

  res.json(user);
};

const deleteUser = async (req, res) => {
  const targetUserId = req.params.userId;
  const adminUserId = req.admin.userId; // Assuming admin user ID is available from middleware

  // Find the user by ID
  const user = await User.findById(targetUserId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update the user's status to "Deleted" instead of removing it
  user.status = 'Deleted';
  await user.save();

  // Log the delete action in the admin's user management history
  const admin = await Admin.findOne({ userId: adminUserId });
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }

  admin.userManagement.push({
    action: 'deleted',
    userId: targetUserId,
    notes: 'User marked as deleted, preserved in history',
  });

  await admin.save();

  res.json({ message: `User ${user.username} marked as deleted` });
};

const createUser = async (req, res) => {
  const { username, password, email, accountType, status } = req.body;

  if (![username, password, email, accountType, status].every(Boolean)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const userObject = {
    username,
    password: hashedPwd,
    email,
    accountType,
    status,
  };

  await User.create(userObject);

  res.status(201).json({ message: `New user created` });
};

module.exports = {
  getAllUsers,
  performUserAction,
  getUserDetails,
  deleteUser,
  createUser,
};
