const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  Comments: {
    type: String,
    maxlength: 500
  },
  rol: {
    type: String,
    enum: ['admin', 'user', 'guest'],
    required: true
  }
});


const CredentialsSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    maxlength: 100
  },
  phone: {
    type: Number,
    required: true,
    min: 100000000,
    max: 9999999999
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

CredentialsSchema.pre('save', function (next) {
  const credentials = this;
  if (credentials.isModified('address')) {
    credentials.address = credentials.address.toUpperCase();
  }
  next();
});

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

const User = mongoose.model('User', UserSchema);
const Profile = mongoose.model('Profile', ProfileSchema);
const Credentials = mongoose.model('Credentials', CredentialsSchema);
const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  User,
  Profile,
  Credentials,
  Photo,
};
