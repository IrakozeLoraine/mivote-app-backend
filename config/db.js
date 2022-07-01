const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/mivote';

exports.connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected successfully to db'))
    .catch((err) => console.log(err));
};
