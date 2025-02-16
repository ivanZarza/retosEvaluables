const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  image: {
    type: String,
    required: true
  }, title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
});

const Photo = mongoose.model('Photo', photoSchema, 'photos');

module.exports = Photo ;