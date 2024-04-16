const mongoose = require('mongoose');

// Define the schema
const postalDispatchSchema = new mongoose.Schema({
  toTitle: { type: String, required: true },
  referenceNo: { type: String },
  address: { type: String },
  note: { type: String },
  fromTitle: { type: String },
  date: { type: Date, default: Date.now },
  attachDocument: { type: String } // Assuming document attachment is stored as a file path or URL
});

// Create a model
const PostalDispatch = mongoose.model('PostalDispatch', postalDispatchSchema);

module.exports = PostalDispatch;
