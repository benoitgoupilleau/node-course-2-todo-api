const {ObjectID} =require('mongodb');
const {mongoose} = require ('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '58c2ab6059b976946ac15d21'}).then((todo)=>{

});

Todo.findByIdAndRemove('58c2ab6059b976946ac15d21').then((todo)=>{
  console.log(todo);
});
