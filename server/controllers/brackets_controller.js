const Bracket = require('../models/bracket');

// Create new Bracket through POST
exports.create = function(req, res, next) {
  var bracket = new Bracket({
    name: req.body.name,
    numberOfEntrants: req.body.numberOfEntrants,
    entrants: req.body.entrants,
    game: req.body.game,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    location: req.body.location,
    rounds: req.body.rounds
  });
  bracket.save(function(error) {
    if (error) {
      return next(error);
    }
    res.json(bracket); // Do we want to return the bracket once it's created?
  });
};


// exports.show = (req, res, next) => {
//   res.json({});
// };

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
  Bracket.findByIdAndUpdate(req.params.id, { $set: 
    {
    name: req.body.name,
    numberOfEntrants: req.body.numberOfEntrants,
    entrants: req.body.entrants,
    game: req.body.game,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    location: req.body.location,
    rounds: req.body.rounds
    }
  }).exec(function(err, bracket){
      if (err) {
        res.send({ error: err });
        return next(err);
      }
      res.json(bracket);
      });
};

Book.findOneAndUpdate({ "_id": bookId }, { "$set": { "name": name, "genre": genre, "author": author, "similar": similar}}).exec(function(err, book){
  if(err) {
      console.log(err);
      res.status(500).send(err);
  } else {
           res.status(200).send(book);
  }
});

// Delete a bracket through DELETE
exports.delete = function(req, res) {
    res.send('TODO: bracket delete');
};