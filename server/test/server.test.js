const expect = require('expect'); 
const request = require('supertest'); 

const {app} = require('./../server');
const {Todo} = require('./../models/todo');  

const todos = [{
    text: 'feed the cat'
},{
    text: 'feet the other cat'
}]
beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos); 
    }).then(() => done()); 
}); 

describe('POST/TODOS', () => {
    it("should create a new todo", (done) => {
        var text = 'Test to do text'; 

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            res.body.text = text; 
        })
        .end((err, res) => {
            if(err) {
              return done(err); 
            }

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1); 
                expect(todos[0].text).toBe(text); 
                done(); 
            }).catch((e) => {
                console.log(e); 
            }); 
        })
    }); 

    it('should not create todo with invalid body data', () => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err) {
            return done(err); 
            }
            Todo.find().then((done) => {
                expect(todos.length).toBe(2); 
                done(); 
            }).catch((e) => {
                console.log(e);
            });
        })
    }); 

    describe('Get/todos route', () => {
        it('should get all todos', (done) => {
            request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2); 
            }).end(done)
        }); 
    }); 



    
});