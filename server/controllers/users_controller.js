const User = require('../models/user');

exports.show = (req, res, next) => {
  const userId = req.params.id;

  User.findById({ _id: userId }).then(user => res.send(user)).catch(next);
};

exports.edit = (req, res, next) => {
  const userId = req.params.id;
  const userProps = req.body;

  User.findByIdAndUpdate({ _id: userId }, userProps)
    .then(() => User.findById({ _id: userId }))
    .then(user => res.send(user));
};

exports.delete = (req, res, next) => {
  const userId = req.params.id;

  User.findByIdAndRemove({ _id: userId })
    .then(user => res.status(204).send(user))
    .catch(next);
};
