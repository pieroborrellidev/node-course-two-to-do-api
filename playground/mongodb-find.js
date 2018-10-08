const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj); 

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
       return console.log(err); 
    }
    console.log("connected to mongodb server"); 

    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Todos'); 
        console.log(JSON.stringify(docs, undefined, 2)); 
    }, (err) => {
        console.log('unable to fetch todos', err); 
    }); 

    db.collection('Users').insertOne({
        name:'Jen', 
        age: 19, 
        location: 'Rome'
    }, (err, result) => {
        if(err) {
            console.log('unable to enter data', err); 
        }
        db.close(); 
    
    
    }); 

}); 

