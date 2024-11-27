import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
configDotenv();

const connectionString =
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/";

const connectDB = async () => {
  const client = new MongoClient(connectionString);

  let connection;

  try {
    connection = await client.connect();
  } catch (e) {
    console.log("failed to connect");
  }

  const db = connection.db("sample_mflix");
  return db;
};

export default connectDB;
