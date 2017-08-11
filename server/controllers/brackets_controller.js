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
exports.bracket_list = function(req, res) {
    res.send('TODO: bracket list');
};

// Display specific Bracket through GET
exports.bracket_show = function(req, res) {
    res.send('TODO: bracket detail: ' + req.params.id);
};

// Delete a bracket through DELETE
exports.bracket_delete = function(req, res) {
    res.send('TODO: bracket delete');
};

// Update Bracket through PUT
exports.bracket_update = function(req, res) {
    res.send('TODO: bracket update ');
};