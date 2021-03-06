const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

const uri = `mongodb+srv://${process.env.DB_PASS}:${process.env.DB_USER}@cluster0.pardn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
        console.log('database connect')
    }
    finally{
        await client.close()
    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})