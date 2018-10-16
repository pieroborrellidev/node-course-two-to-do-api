const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
        return console.log(err); 
    }

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bbb1a6a8f49ee57106859f0"),
    }, {
        $set: {
            name: "Joseph"
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: true
    }).then((result) => {
        console.log(result); 
    });

}); 