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

    const usersCollection = client.db('Task-Manager').collection('users')
    const tasksCollection = client.db('Task-Manager').collection('tasks')

    // Users API
    app.post('/users',async(req,res)=>{
      const user = req.body;
      const result = await usersCollection.insertOne(user)
      res.send(result)
    })
    app.get('/users',async(req,res)=>{
      const result = await usersCollection.find().toArray()
      res.send(result)
    })

    // Tasks API
    app.post('/tasks',async(req,res)=>{
      const tasks = req.body;
      const result = await tasksCollection.insertOne(tasks)
      res.send(result)
    })
    app.get('/tasks',async(req,res)=>{
      const email = req.query.email;
      const query = email ? { email: email } : {};
      const result = await tasksCollection.find(query).toArray()
      res.send(result)
    })
    
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