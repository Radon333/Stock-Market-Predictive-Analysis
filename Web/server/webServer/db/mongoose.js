const mongoose = require('mongoose');

const mongodb_url =
  'mongodb+srv://raj:raj1234@cluster0.jeqlf.mongodb.net/RBl_DB?retryWrites=true&w=majority';

mongoose.connect(mongodb_url);
