module.exports={


save:function (obj) {
    var MongoClient = require('mongodb').MongoClient;
    let localTime = new Date(new Date().toString().split('GMT')[0] + ' UTC')
        .toISOString().split('.')[0].replace('T', ' ');
    MongoClient.connect('mongodb://localhost:27017', function (err, client) {
        if (err) throw err
        var prs = JSON.stringify(obj);
        const dba = client.db('bug');
        dba.collection('businessObjects').insertOne({
            objparsed: prs,
            creationdate: localTime
        }, (err, result) => {
            if (err) {
                return console.log(err);
            }
            console.log('Inserted');
        });
    })
},
update:function (obj) {
    if(obj&&obj.id){
        const { MongoClient, ObjectId }  = require('mongodb');
        let localTime = new Date(new Date().toString().split('GMT')[0] + ' UTC')
            .toISOString().split('.')[0].replace('T', ' ');

        MongoClient.connect('mongodb://localhost:27017', function (err, client) {
            if (err) throw err
            var prs = JSON.stringify(obj);
            const dba = client.db('bug');
            dba.collection('businessObjects').findOneAndUpdate({
                _id:new ObjectId(obj.id)},
                { $set:{objparsed: prs,
                updateDate: localTime}});
        })

    }
}
}
