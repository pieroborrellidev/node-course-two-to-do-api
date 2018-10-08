const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj); 

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
       return console.log(err); 
    }
    console.log("connected to mongodb server"); 

    db.collection('Todos').insertOne({
        text: 'something to do', 
        completed: false

    }, (err, result) => {
        if(err) {
            return console.log("unable to insert todo", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2)); 

    }); 

    var user = {name : 'Andrew', age: 25}; 
    var {name} = user; 
    console.log(name); 

    db.collection('Users').insertOne({
        name: 'Piero Borrelli', 
        age: 19, 
        location: 'Milan'

    }, (err, result) => {
        if(err) {
            console.log("unable to insert user", err); 
        }

        console.log(JSON.stringify(result.ops, undefined, 2)); 

    }); 

    db.close(); 
}); 