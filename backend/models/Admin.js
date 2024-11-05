const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },

    // Manage Users
    userManagement: [
      {
        action: {
          type: String,
          enum: ['suspend', 'delete', 'warn', 'approve'],
          required: true,
        },
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        date: { type: Date, default: Date.now },
        notes: { type: String },
      },
    ],

    // Reports and Disputes Handling
    reports: [
      {
        reportId: { type: Schema.Types.ObjectId, ref: 'Report' },
        reportedBy: { type: Schema.Types.ObjectId, ref: 'User' },
        reportedUserId: { type: Schema.Types.ObjectId, ref: 'User' },
        reportReason: { type: String },
        actionTaken: {
          type: String,
          enum: ['review', 'resolved', 'dismissed'],
          default: 'review',
        },
        resolutionNotes: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],

    // Monitoring Trades
    tradeMonitoring: [
      {
        tradeId: { type: Schema.Types.ObjectId, ref: 'Trade' },
        sellerId: { type: Schema.Types.ObjectId, ref: 'Seller' },
        status: {
          type: String,
          enum: ['active', 'flagged', 'completed', 'disputed'],
          default: 'active',
        },
        issueNotes: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
