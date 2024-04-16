const mongoose = require('mongoose');

// Define the schema
const phoneCallLogSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String },
  nextFollowUpDate: { type: Date },
  callDuration: { type: String }, // Assuming call duration is stored as a string
  note: { type: String },
  callType: { type: String, enum: ['Incoming', 'Outgoing'] }
});

// Create a model
const PhoneCallLog = mongoose.model('PhoneCallLog', phoneCallLogSchema);

module.exports = PhoneCallLog;
