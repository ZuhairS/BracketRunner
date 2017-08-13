const Bracket = require('../models/bracket');

// Create new Bracket through POST

// exports.create = function(req, res, next) {
//   var bracket = new Bracket(req.body);
//   bracket.save(bracket, function(error) {
//     if (error) {
//       return next(error);
//     }
//     res.json(bracket);
//   });
// };

exports.create = (req, res, next) => {
  const bracketProps = req.body;

  Bracket.create(bracketProps).then(bracket => res.send(bracket)).catch(next);
};

// Display specific Bracket through GET

// exports.show = function(req, res, next) {
//   Bracket.findById(req.params.id).exec((err, bracket) => {
//     if (err) {
//       res.send({ error: err });
//       return next(err);
//     }
//     res.json(bracket);
//   });
// };

exports.show = (req, res, next) => {
  const bracketId = req.params.id;

  Bracket.findById({ _id: bracketId })
    .then(bracket => res.send(bracket))
    .catch(next);
};

// Update Bracket through PUT

// exports.edit = function(req, res, next) {
//   Bracket.findByIdAndUpdate(req.params.id, { $set: req.body }).exec(function(
//     err,
//     bracket
//   ) {
//     if (err) {
//       res.send({ error: err });
//       return next(err);
//     }
//     res.json(bracket);
//   });
// };

exports.edit = (req, res, next) => {
  const bracketId = req.params.id;
  const bracketProps = req.body;

  Bracket.findByIdAndUpdate({ _id: bracketId }, bracketProps)
    .then(() => Bracket.findById({ _id: bracketId }))
    .then(bracket => res.send(bracket))
    .catch(next);
};

// Delete a bracket through DELETE

// exports.delete = function(req, res, next) {
//   Bracket.findByIdAndRemove(req.params.id).exec((err, bracket) => {
//     if (err) {
//       res.send({ error: err });
//       return next(err);
//     }
//     res.json({ message: 'Bracket deleted.' });
//   });
// };

exports.delete = (req, res, next) => {
  const bracketId = req.params.id;

  Bracket.findByIdAndRemove({ _id: bracketId })
    .then(bracket => res.status(204).send(bracket))
    .catch(next);
};
