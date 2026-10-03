

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri) {
  throw new Error("Please add MONGODB_URI in .env.local");
}

// ⚠️ global cache fix for Next.js hot reload
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// ✅ server-only DB connect function
export const dbConnect = async () => {
  const client = await clientPromise;
  return client.db(dbName);
};

// optional helper
export const collections = {
  USERS: "users",
};