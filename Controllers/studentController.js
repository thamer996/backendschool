// controllers/candidateController.js
const Student = require('../Models/students');

async function createStudent(req, res) {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create student' });
  }
}

async function getAllStudents(req, res) {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve students' });
  }
}

module.exports = {
  createStudent,
  getAllStudents
};
