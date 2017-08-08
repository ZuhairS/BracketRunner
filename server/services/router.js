const passport = require('passport');

const AuthenticationController = require('../controllers/authentication_controller');
const passportService = require('./passport');

var requireAuth = passport.authenticate('jwt', { session: false });
var requireLogin = passport.authenticate('local', { session: false });

const router = require('express').Router();

// const BracketController = require('../controllers/bracket_controller');

// Auth Routes
router.route('/signup').post(AuthenticationController.signup);
router.route('/signin').post([requireLogin, AuthenticationController.signin]);

// // Bracket Routes
// router.route('/brackets/:bracket_id').get(BracketController.show);

module.exports = router;
