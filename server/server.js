var {mongoose} = require('./db/mongoose'); 
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectID} = require('mongodb'); 

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

app.get('/todos/:id', (req, res) => {
  const id = req.params.id; 
  if(!ObjectID.isValid(id)) {
    return res.status(404).send(); 
}
  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send(); 
    }
    res.send({todo}); 
  }).catch((e) => {
    res.status(400).send(); 
  });  




  // validate id
  // not valid : return an error and a 404 empty body

  // query using findbyid
  //  if invalid send 404 and send back nothing 
  //  if valid send todo back

  // if no todo, then send back 404 empty body

});

app.listen(3000, () => {
  console.log("started on port 3000"); 
}); 

module.exports = {app}; 
//new user model 
// property email required and trim it string minlenght 1
