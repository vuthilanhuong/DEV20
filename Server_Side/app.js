var mongoose = require('mongoose');

//1.conect to mongoosedb

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://HuongVu:<password>@cluster0-vw0ar.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

//2.
