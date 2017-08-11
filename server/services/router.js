const passport = require('passport');
const passportService = require('./passport');

const AuthenticationController = require('../controllers/authentication_controller');
const UserController = require('../controllers/users_controller');
// const BracketController = require('../controllers/bracket_controller');

var requireAuth = passport.authenticate('jwt', { session: false });
var requireLogin = passport.authenticate('local', { session: false });

const router = require('express').Router();

// Auth Routes
router.route('/signup').post(AuthenticationController.signup);
router.route('/signin').post([requireLogin, AuthenticationController.signin]);

// User Routes
router.route('/users/:id').get(UserController.show);
router.route('/users/:id').put(UserController.edit);
router.route('/users/:id').delete(UserController.delete);

// // Bracket Routes
// router.route('/brackets/:bracket_id').get(BracketController.show);

module.exports = router;
