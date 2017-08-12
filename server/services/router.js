const passport = require('passport');
const passportService = require('./passport');

const AuthenticationController = require('../controllers/authentication_controller');
const UserController = require('../controllers/users_controller');
const BracketsController = require('../controllers/brackets_controller');

var requireAuth = passport.authenticate('jwt', { session: false });
var requireLogin = passport.authenticate('local', { session: false });

const router = require('express').Router();

// Auth Routes
router.route('/signup').post(AuthenticationController.signup);
router.route('/signin').post([requireLogin, AuthenticationController.signin]);
router.route('/signout').delete(AuthenticationController.signout);

// User Routes
router.route('/users/:id').get(UserController.show);
router.route('/users/:id').put(UserController.edit);
router.route('/users/:id').delete(UserController.delete);

// // Bracket Routes
router.route('/brackets/create').post(BracketsController.create);
router.route('/brackets/:bracket_id').get(BracketsController.show);
router.route('/brackets/:bracket_id').put(BracketsController.edit);
router.route('/brackets/:bracket_id').delete(BracketsController.delete);

module.exports = router;
