const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
require('dotenv').config()

// MONGODB

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.bho7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    
 
  } finally {
    
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/',async(req,res)=>{
    res.send('TO-DO is Cooking')
})

app.listen(port,async(req,res)=>{
    console.log('This Post is running on: ',port)
})