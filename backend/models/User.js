const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    accountType: {
      type: String,
      enum: ['buyer', 'seller', 'admin'],
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'Registered',
      enum: ['Registered', 'Verified', 'Suspended', 'Deleted'],
    },

    // Account Recovery
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
