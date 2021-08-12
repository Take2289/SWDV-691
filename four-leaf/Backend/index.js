const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient 
const DB_URL = "mongodb://localhost:27017"
const DB_Name = "FourLeafDB"

var mongo_client = null; 

const handleDBconnect = (err, res) => {
  if(err) {
    console.log("Error connecting");
    console.log(err);
  }else{
    console.log("Dbconnected");
  }
  mongo_client = res;
};

MongoClient.connect(
  DB_URL, 
  handleDBconnect
)

app.get('/fooditems', (req, res) => {
  const collection = mongo_client.db(DB_Name).collection("fooditems");
  collection.find().toArray().then(results => {

    res.send(results)
  });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})