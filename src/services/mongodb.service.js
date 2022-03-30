const { MongoClient } = require("mongodb");

// Connection URI
const uri = process.env.URI_MONGODB;

const conectarDB = async () => {
  // Connect the client to the server
  await client.connect();
  let DB = client.db(process.env.DB_MONGODB);
  return DB;
}
const leerColeccion= async(nombreColeccion) => {
  let db = await conectarDB()
  let coleccion = db.collection(nombreColeccion)
  coleccion.find({})
}


// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//run().catch(console.dir);
module.exports = run


