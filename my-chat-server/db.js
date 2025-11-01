// db.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

const connectToServer = async () => {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    db = client.db(); // Use the default database from your URI
    await db.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit if connection fails
  }
};

const getDb = () => {
  return db;
};

module.exports = { connectToServer, getDb };