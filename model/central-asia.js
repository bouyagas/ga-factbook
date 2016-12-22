const { MongoClient, ObjectID } = require('mongodb');
const DB_CONNECTION =  process.env.MONGODB_URI || 'mongodb://localhost:27017/ga_factbook';
function getAllcentralAsia(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('central-asia')
      .find({})
      .toArray((toArrErr, data) => {
       res.centralAsia = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}


module.exports = { getAllcentralAsia };
