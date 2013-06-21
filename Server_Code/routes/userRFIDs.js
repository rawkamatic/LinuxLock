require('./mongo_connect.js');

exports.findAll = function(req, res) {
    var name = req.query["name"];
    db.collection('userRFIDs', function(err, collection) {
        if (name) {
            collection.find({"fullName": new RegExp(name, "i")}).toArray(function(err, items) {
                res.jsonp(items);
            });
        } else {
            collection.find().toArray(function(err, items) {
                res.jsonp(items);
            });
        }
    });
};

exports.findById = function(id, done) {
    var err;
    console.log('findUserRfidById: ' + rfidId);
    db.collection('userRFIDs', function(err, collection) {
        collection.find({'_id': 'ObjectId("' + id + '")'}).toArray(function(err, items) {
            console.log(items);
            if(!err){
                return done(null, items);
            } else{ 
                return done(err, items);
            }
        });
    });
};
