const mongoose = require('mongoose');

const profesionalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  isRetired: {
    type: Boolean,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  oscarsNumber: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: true
  }
});

const Profesional = mongoose.model('Profesional', profesionalSchema, 'profesional');

module.exports = Profesional;  