const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./services/router');

const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/BracketRunner');
}

// Root Route
app.get('/', (req,res,next) => res.send({"Why": "Keep Dyno Awake"}));

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/api/v1', router);
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

const PORT = process.env.PORT || 3000;

console.log('Listening on', PORT);

app.listen(PORT);
