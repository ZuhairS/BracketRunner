const Bracket = require('../models/bracket');
const User = require('../models/user');

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

  // bracketProps.matches = populateMatches(bracketProps.entrants);
  Promise.all(userQueries(bracketProps.entrants))
    .then((bracketProps.matches = populateMatches(bracketProps.entrants)))
    .then(
      Bracket.create(bracketProps)
        .then(bracket => {
          return res.send(bracket)
        })
        .catch(next)
    );
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

exports.index = (req, res, next) => {
  Bracket.find({ live: true }).then(brackets => res.send(brackets)).catch(next);
};

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
  const bracketId = req.params.bracket_id;
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

exports.showFeatured = (req, res, next) => {
  let random;

  Bracket.count().then(count => {
    random = Math.floor(Math.random() * count);
  });

  Bracket.findOne().skip(random).then(bracket => res.send(bracket)).catch(next);
};

// Populates matches with correct sequence of players in entrants
const populateMatches = entrants => {
  let matches = [];
  const numMatches = Math.ceil(Object.keys(entrants).length - 1);

  for (let i = 0, j = 0; i < numMatches; i++, j = j + 2) {
    matches[i] = {
      pairing: {
        player1: entrants[j] ? entrants[j] : "Pending",
        player2: entrants[j + 1] ? entrants[j+1] : "Pending"
      }
    };
  }
  return matches;
};

const userQueries = entrants => {
  const promiseArr = [];

  for (let i = 0; i <= Object.keys(entrants).length; i++) {
    promiseArr.push(
      User.findOne({ username: entrants[i] }).then(
        user => (entrants[entrants[i]] = user ? user : {username : entrants[i], avatarUrl: "https://res.cloudinary.com/dj1l8etr0/image/upload/v1503705392/1497605502_bzref2.png"})
      )
    );
  }
  return promiseArr;
};

// let entries = {
//   1: 'Zuhair',
//   2: 'Zack',
//   3: 'Nick',
//   4: 'Ali',
//   5: 'Mango',
//   6: 'Tobito',
//   7: 'Peeves',
//   8: 'Potato Monster'
// };
