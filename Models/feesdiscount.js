const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for FeesDiscount
const feesDiscountSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    DiscountCode: {
        type: String,
        required: true
    },
    DiscountType: {
        type: String,
        enum: ['Percentage', 'Fixed Amount'],
        default: 'Percentage'
    },
    Percentage: {
        type: Number,
        default: 0
    },
    Amount: {
        type: Number,
        default: 0
    },
    Description: {
        type: String
    }
});

// Create a model for FeesDiscount
const FeesDiscount = mongoose.model('FeesDiscount', feesDiscountSchema);

module.exports = FeesDiscount;
