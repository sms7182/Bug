
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err
    console.log('connected to db');
    const dba=client.db('bug');
    dba.collection('users').insertOne({
        username:'fatalError',
        creationdate:'2019-04-05'
    },(err,result)=>{
        if(err){
            return  console.log(err);
        }
        console.log('Inserted');
    });
    /*db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
    })*/
})
