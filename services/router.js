const router = require('express').Router();

const message = (req, res, next) => {
  res.send('Message!');
};

router.route('/').get(message);

module.exports = router;
