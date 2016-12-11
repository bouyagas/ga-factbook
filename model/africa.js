const { MongoClient, OBjectID } = require('mongodb');
const DB_CONNECTION = 'mongodb://localhost:27017/ga_factbook';

function getAllAfricanCountries(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('africa')
      .find({})
      .toArray((toArrErr, data) => {
        if (toArrErr) return next(toArrErr);
        res.africa = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}


module.exports = { getAllAfricanCountries };
