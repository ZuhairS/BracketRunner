const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const validateEmail = email => {
  return /\S+@\S+\.\S+/.test(email);
};

const validateUsername = username => {
  return /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/.test(username);
};

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'Username is required',
    uniqueCaseInsensitive: true,
    validate: [
      validateUsername,
      'Please enter only alphanumeric characters, underscores and hyphens'
    ]
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please enter a valid email']
  },
  password: {
    type: String
  }
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(next) {
  let user = this;
  if (user.isNew || user.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(error, hash) {
        if (error) {
          return next(error);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('user', userSchema);
