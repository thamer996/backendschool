// controllers/classController.js

const Class = require('../Models/classes');

async function createClass(req, res) {
  try {
    const newClass = new Class(req.body);
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create class' });
  }
}

async function getAllClasses(req, res) {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve classes' });
  }
}

module.exports = {
  createClass,
  getAllClasses
};
