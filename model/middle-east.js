const { MongoClient, ObjectID } = require('mongodb');

const DB_CONNECTION = 'mongodb://localhost:27017/ga_factbook';

function getAllMiddlleEastCountries(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('middle-east')
       .find({})
       .toArray((toArrErr, data) => {
         if (toArrErr) return next(toArrErr);
         res.middleEast = data;
         db.close();
         return next();
       });
    return false;
  });
  return false;
}


module.exports = { getAllMiddlleEastCountries };
