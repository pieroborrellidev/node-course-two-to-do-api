const expect = require('expect'); 
const request = require('supertest'); 

const {app} = require('./../server/server');
const {Todo} = require('./../models/todo');  

beforeEach((done) => {
    Todo.remove({}).then(() => done());
}); 

describe('POST/TODOS', () => {
    it("should create a new todo", (done) => {
        var text = 'Test to do text'; 

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            response.body.text = text; 
        })
        .end((err, res) => {
            if(err) {
              return done(err); 
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(1); 
                expect(todos[0].text).toBe(text); 
                done(); 
            }).catch((e) => {
                console.log(e); 
            }); 
        })
    }); 
});