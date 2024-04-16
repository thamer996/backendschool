const mongoose = require('mongoose');

const AssignClassTeacherSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class', // Assuming 'Class' is the name of the Class model
    required: true
  },
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff', // Assuming 'Staff' is the name of the Staff model
    required: true
  }
});

const AssignClassTeacher = mongoose.model('AssignClassTeacher', AssignClassTeacherSchema);

module.exports = AssignClassTeacher;
