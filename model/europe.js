const { MongoClient, ObjectID }  = require('mongodb');

const DB_CONNECTION = 'mongodb://localhost:27017/ga_factbook';

function getAllEurpeanCountries(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('europe')
       .find({})
       .toArray((toArrErr, data) => {
         if (toArrErr) return next(toArrErr);
         res.europe = data;
         db.close();
         return next();
       });
    return false;
  });
  return false;
}


module.exports = { getAllEurpeanCountries };
