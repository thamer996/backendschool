// controllers/teacherController.js
const Teacher = require('../Models/teacher');

async function createTeacher(req, res) {
  try {
    const newTeacher = new Teacher(req.body);
    const savedTeacher = await newTeacher.save();
    res.status(201).json(savedTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create teacher' });
  }
}

async function getAllTeachers(req, res) {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve teachers' });
  }
}

module.exports = {
  createTeacher,
  getAllTeachers
};
