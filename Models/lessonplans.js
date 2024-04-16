const mongoose = require('mongoose');

const LessonPlanSchema = new mongoose.Schema({
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff', // Assuming 'Staff' is the name of the Staff model
        required: true
      },
      lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson', // Assuming 'Staff' is the name of the Staff model
        required: true
      },
  Topic: {
    type: String,
    required: true
  },
  SubTopic: {
    type: String,
    required: false
  },
  Date: {
    type: Date,
    required: true
  },
  TimeFrom: {
    type: String, // Assuming you want to store as string
    required: true
  },
  TimeTo: {
    type: String, // Assuming you want to store as string
    required: true
  },
  LectureYouTubeURL: {
    type: String,
    required: false
  },
  LectureVideo: {
    type: String,
    required: false
  },
  Attachment: {
    type: String,
    required: false
  },
  TeachingMethod: {
    type: String,
    required: false
  },
  GeneralObjectives: {
    type: String,
    required: false
  },
  PreviousKnowledge: {
    type: String,
    required: false
  },
  ComprehensiveQuestions: {
    type: String,
    required: false
  },
  Presentation: {
    type: String,
    required: false
  }
});

const LessonPlan = mongoose.model('LessonPlan', LessonPlanSchema);

module.exports = LessonPlan;
