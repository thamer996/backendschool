const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    LessonName: {
        type: String,
        required: true
      },
  Class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class', // Assuming 'Class' is the name of the Class model
    required: true
  },
  Section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section', // Assuming 'Section' is the name of the Section model
    required: true
  },
  SubjectGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubjectGroup', // Assuming 'SubjectGroup' is the name of the SubjectGroup model
    required: true
  },
  Subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject', // Assuming 'Subject' is the name of the Subject model
    required: true
  }
});

const Lesson = mongoose.model('Lesson', LessonSchema);

module.exports = Lesson;
