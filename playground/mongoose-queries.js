const {mongoose} = require('../server/db/mongoose'); 
const {ObjectID} = require('mongodb'); 
const {Todo} = require('../server/models/todo'); 
const {User} = require('../server/models/user'); 

const id = '5bd3679b220d9e143cffb086';
const userId = '5bcf7dfd162135b43bec6993'; 

if(!ObjectID.isValid(id)) {
    console.log("id not found"); 
}

// query results with a certain value 
Todo.find({
    _id: id
}).then((todos) => {
    console.log(todos); 
}); 

// query the first result that matches the condition
Todo.findOne({
    _id : id
}).then((todo)=> {
    console.log(todo); 
}); 

// simply find by looking for the id 
Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log("id not found");  
    }
    console.log(todo); 
}).catch((e) => {
    console.log(e); 
}); 

User.findById(userId).then((user) => {
    if(!user) {
        return console.log("user not found"); 
    }
    console.log(user); 
}).catch((e) => {
    console.log(e); 
}); 

