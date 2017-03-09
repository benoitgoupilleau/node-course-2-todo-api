const {ObjectID} =require('mongodb');
const {mongoose} = require ('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = '58c11f2c14cfea431543d430';

User.findById(id).then((user)=>{
  if (!user) {
    return console.log('User cannot be found');
  }
  console.log('User', user);
},(e)=>console.log(e))

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID',todo);
// }).catch((e)=> console.log(e));
