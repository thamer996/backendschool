// controllers/homeworkController.js

const Homework = require('../Models/homework');

async function createHomework(req, res) {
  try {
    const newHomework = new Homework(req.body);
    const savedHomework = await newHomework.save();
    res.status(201).json(savedHomework);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create homework' });
  }
}

async function getAllHomeworks(req, res) {
  try {
    const homeworks = await Homework.find();
    res.status(200).json(homeworks);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve homeworks' });
  }
}

module.exports = {
  createHomework,
  getAllHomeworks
};
