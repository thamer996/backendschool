const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'roles' }, // Référence à la table des rôles
    mobileNumber: { type: String },
    panNumber: { type: String }
}, { timestamps: true });

const users = mongoose.model('users', usersSchema);

module.exports = users;
