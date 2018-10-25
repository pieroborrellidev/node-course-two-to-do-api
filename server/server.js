var {mongoose} = require('./db/mongoose'); 
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var express = require('express'); 
var bodyParser = require('body-parser'); 

var app = express(); 

app.use(bodyParser.json()); 
app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  }); 

  todo.save().then((doc) => {
    res.send(doc); 
  }, (e) => {
    res.status(400).send(e); 
  }); 
}); 

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos}); 
  }, (e) => {

  }); 
}); 

app.listen(3000, () => {
  console.log("started on port 3000"); 
}); 

module.exports = {app}; 
//new user model 
// property email required and trim it string minlenght 1
