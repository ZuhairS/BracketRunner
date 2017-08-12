const Bracket = require('../models/bracket');

// Create new Bracket through POST
exports.create = function(req, res, next) {
  var bracket = new Bracket(req.body);
  Bracket.save(bracket, function(error) {
    if (error) {
      return next(error);
    }
    res.json(bracket); // Do we want to return the bracket once it's created?
  });
};

// Display list of Brackets through GET; for the bracket feed
// exports.bracketList = function(req, res) {
//     res.send('TODO: bracket list');
// };

// Display specific Bracket through GET
exports.show = function (req, res, next) {
  Bracket.findById(req.params.id).exec((err, bracket) => {
      if (err) {
        res.send({ error: err });
        return next(err);
      }
      res.json(bracket);
    });
};

// Update Bracket through PUT
exports.edit = function(req, res, next) {
  Bracket.findByIdAndUpdate(req.params.id, { $set: req.body })
    .exec(function(err, bracket) {
      if (err) {
        res.send({ error: err });
        return next(err);
      }
      res.json(bracket);
      });
};

// Delete a bracket through DELETE
exports.delete = function (req, res, next) {
  Bracket.findByIdAndRemove(req.params.id).exec((err, bracket) => {
      if (err) {
        res.send({ error: err });
        return next(err);
      }
      res.json({ message: 'Bracket deleted.'});
    });
};