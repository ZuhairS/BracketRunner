const passport = require('passport');
const passportService = require('./passport');

const AuthenticationController = require('../controllers/authentication_controller');
const UsersController = require('../controllers/users_controller');
const BracketsController = require('../controllers/brackets_controller');

var requireAuth = passport.authenticate('jwt', { session: false });
var requireLogin = passport.authenticate('local', { session: false });

const router = require('express').Router();

// Auth Routes
router.route('/signup').post(AuthenticationController.signup);
router.route('/signin').post([requireLogin, AuthenticationController.signin]);
router.route('/signout').delete(AuthenticationController.signout);

// User Routes
router.route('/users/:id').get(UsersController.show);
router.route('/users/:id').put(UsersController.edit);
router.route('/users/:id').delete(UsersController.delete);

// Bracket Routes
router.route('/brackets').post(BracketsController.create);
router.route('/brackets/:bracket_id').get(BracketsController.show);
router.route('/brackets/:bracket_id').put(BracketsController.edit);
router.route('/brackets/:bracket_id').delete(BracketsController.delete);

// Featured Bracket Route
router.route('/featured_bracket').get(BracketsController.showFeatured);

module.exports = router;
