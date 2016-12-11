const { MongoClient, ObjectID } = require('mongodb');
const DB_CONNECTION = 'mongodb://localhost:27017/ga_factbook';

function getAllAntarticticaCountries(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('antarctica')
      .find({})
      .toArray((toArrErr, data) => {
        if (toArrErr) next(toArrErr);
        res.antarctica = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}


module.exports = { getAllAntarticticaCountries };
