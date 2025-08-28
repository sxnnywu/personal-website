import app, { likesCollection } from "./app.js";
import { MongoClient } from "mongodb";

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db("heartApp");
    likesCollection = db.collection("likes");

    await likesCollection.updateOne(
      { _id: "likes" },
      { $setOnInsert: { count: 0 } },
      { upsert: true }
    );

    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to DB", err);
  }
}

startServer();
