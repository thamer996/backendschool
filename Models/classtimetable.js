const mongoose = require('mongoose');

const ClassTimetableSchema = new mongoose.Schema({
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff', // Assuming 'Staff' is the name of the Staff model
    required: true
  },
  TimeFrom: {
    type: Date,
    required: true
  },
  TimeTo: {
    type: Date,
    required: true
  },
  RoomNo: {
    type: String,
    required: true
  }
});

const ClassTimetable = mongoose.model('ClassTimetable', ClassTimetableSchema);

module.exports = ClassTimetable;
