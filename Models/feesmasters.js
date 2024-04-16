const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for FeesMaster
const feesMasterSchema = new Schema({
    feesGroup: {
        type: Schema.Types.ObjectId,
        ref: 'FeesGroup',
        required: true
    },
    feesType: {
        type: Schema.Types.ObjectId,
        ref: 'FeeType',
        required: true
    },
   
    Select: {
        type: String,
        required: true
    },
    
    DueDate: {
        type: Date
    },
    Amount: {
        type: Number,
        required: true
    },
    FineType: {
        type: String,
        enum: ['None', 'Percentage', 'Fixed Amount'],
        default: 'None'
    },
    Percentage: {
        type: Number,
        default: 0
    },
    FixAmount: {
        type: Number,
        default: 0
    }
});

// Create a model for FeesMaster
const FeesMaster = mongoose.model('FeesMaster', feesMasterSchema);

module.exports = FeesMaster;
