import { MongoClient } from "mongodb";

export async function db(collectionName) {
  try {
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();
    let database = client.db("ecommerce");
    return database.collection(collectionName);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
