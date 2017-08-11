const Bracket = require('../models/bracket');

// Create new Bracket through POST
exports.create = function(req, res, next) {
  var bracket = new Bracket({
    name: req.body.name,
    entrants: req.body.entrants,
    game: req.body.game
    // etc. need to clarify with zach
  });
  bracket.save(function(error) {
    if (error) {
      return next(error);
    }
    res.json({ bracket });
  });
};


// exports.show = (req, res, next) => {
//   res.json({});
// };

// Display list of Brackets through GET
exports.bracketList = function(req, res) {
    res.send('TODO: bracket list');
};

// Display specific Bracket through GET
exports.show = function(req, res) {
    res.send('TODO: bracket detail: ' + req.params.id);
};

// Update Bracket through PUT
exports.edit = function(req, res) {
    res.send('TODO: bracket update ');
};

// Delete a bracket through DELETE
exports.delete = function(req, res) {
    res.send('TODO: bracket delete');
};