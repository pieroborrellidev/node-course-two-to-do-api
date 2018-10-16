const {MongoClient} = require('mongodb'); 

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
        return console.log(err); 
     }
     console.log("connected to mongodb server"); 

     db.collection('Todos').deleteMany({ text: 'something to do'}).then((result) => {
         console.log(result); 
    }); 

    db.collection('Todos').deleteOne({ text: 'something to do'}).then((result) => {
        console.log(result); 
   }); 

   db.collection('Todos').findOneAndDelete({ text: 'something to do'}).then((result) => {
    console.log(result); 
}); 
}); 