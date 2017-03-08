//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // });
  // db.collection('Todos').find({
  //   _id: new ObjectID('58c032c53475566d1b2ae021')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined,2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Benoit'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch user', err);
  })

  //db.close();
});
