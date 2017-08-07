const router = require('express').Router();

const BracketController = require('../controllers/bracket_controller');

// Bracket Routes

router.route('/brackets/:bracket_id').get(BracketController.show);

// const message = (req, res, next) => {
//   res.send('Message!');
// };
//
// router.route('/').get(message);

module.exports = router;
