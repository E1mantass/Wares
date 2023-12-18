const express = require('express');
const mongodb = require('mongodb');


const app = express();
const port = 3001;

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/products";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
  db.close();
});

app.post('/products', async(req, res) => {
  try {
    const {id, title, price, amount} = req.body;

    const database = client.db('products')
    const collection = database.collection('products');

    await collection.insertOne({id, title, price, amount});

    res.status(201).json({message: 'Product added succesfully!' });
  } catch(error){
    console.error('Error adding product:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

app.use(express.json());
app.post('../src/data/')