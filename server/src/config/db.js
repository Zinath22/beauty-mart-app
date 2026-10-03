import { MongoClient } from "mongodb";

let client;
let db;

// Server start howar somoy ekbar connect hoy, tarpor same connection reuse hoy
export async function connectDB() {
  if (db) return db;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is missing in .env");

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(process.env.DB_NAME);

  console.log(`✅ MongoDB connected (${db.databaseName})`);
  return db;
}

export function getDB() {
  if (!db) throw new Error("Database not connected. Call connectDB() first.");
  return db;
}

export const col = (name) => getDB().collection(name);

export async function closeDB() {
  if (client) await client.close();
}
