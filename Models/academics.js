const mongoose = require('mongoose');

const SubjectGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject' // Assuming 'Subject' is the name of the Subjects model
  }],
  sections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section' // Assuming 'Section' is the name of the Sections model
  }],
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class' // Assuming 'Class' is the name of the Class model
  }
});

const SubjectGroup = mongoose.model('SubjectGroup', SubjectGroupSchema);

module.exports = SubjectGroup;
