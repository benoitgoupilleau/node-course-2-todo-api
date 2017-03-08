//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Benoit'}).then((result)=>{
  //   console.log('Deleted');
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('58c02fa37b50d435d0e14b66')}).then((result)=>{
    console.log(result);
  });

  //db.close();
});
