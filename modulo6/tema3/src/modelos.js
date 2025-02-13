const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  last_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  }
});

const MarkSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  mark: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  student_first_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  student_last_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  group_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  subject_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  teachers: {
    type: [TeacherSchema],
    required: true
  }
});

const Teacher = mongoose.model('Teacher', TeacherSchema);
const Mark = mongoose.model('Mark', MarkSchema);

module.exports = { Teacher, Mark };