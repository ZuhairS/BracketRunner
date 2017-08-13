const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  var timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp
    },
    config.secret
  );
}

exports.signin = function(req, res, next) {
  var user = req.user;
  res.send({ token: tokenForUser(user), user_id: user._id });
};

exports.signout = function(req, res, next) {
  var userId = req.userId;
  res.send({ user_id: userId });
};

exports.signup = function(req, res, next) {
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  if (!email || !username || !password) {
    return res
      .status(422)
      .json({ error: 'You must provide an email, username and password' });
  }

  // Check if user already exists, send error if they do
  User.findOne(
    {
      // Check by either email or username
      $or: [{ email: email }, { username: username }]
    },
    function(err, existingUser) {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        return res.status(422).json({ error: 'Email/Username taken' });
      }
      var user = new User({
        email: email,
        username: username,
        password: password
      });
      user.save(function(error) {
        if (error) {
          return next(error);
        }
        res.json({ user_id: user._id, token: tokenForUser(user) });
      });
    }
  );
};
