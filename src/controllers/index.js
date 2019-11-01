const mongoose = require('mongoose');

const mongooseConnect = () => { 
 mongoose.connect('mongodb://localhost/movieApp', { useNewUrlParser: true })
    .then(() => {
      console.log('Connected to Mongo!');
    }).catch(err => {
      console.error('Error connecting to mongo', err);
    });
};

module.exports = {
  mongooseConnect,
}