// controllers/adminController.js
const Admin = require('../Models/admin');

async function createAdmin(req, res) {
  try {
    const newAdmin = new Admin(req.body);
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create admin' });
  }
}

async function getAllAdmins(req, res) {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve admins' });
  }
}

module.exports = {
  createAdmin,
  getAllAdmins
};
