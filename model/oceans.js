const { MongoClient, ObjectID }  = require('mongodb');

const DB_CONNECTION =  process.env.MONGODB_URI || 'mongodb://localhost:27017/ga_factbook';
function getAllOceansCountries(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('oceans')
       .find({})
       .toArray((toArrErr, data) => {
         if (toArrErr) return next(toArrErr);
         res.oceans = data;
         db.close();
         return next();
       });
    return false;
  });
  return false;
}


module.exports = { getAllOceansCountries };
