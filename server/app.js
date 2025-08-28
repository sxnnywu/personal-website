import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let likesCollection;

// Connect to MongoDB
export async function connectDB() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const db = client.db("heartApp");
  likesCollection = db.collection("likes");

  // Ensure document exists
  await likesCollection.updateOne(
    { _id: "likes" },
    { $setOnInsert: { count: 0 } },
    { upsert: true }
  );

  console.log("Connected to MongoDB");
}
connectDB().catch(console.error);

// Routes
app.get("/likes", async (req, res) => {
  try {
    const doc = await likesCollection.findOne({ _id: "likes" });
    res.json({ count: doc.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/likes", async (req, res) => {
  try {
    const result = await likesCollection.findOneAndUpdate(
      { _id: "likes" },
      { $inc: { count: 1 } },
      { returnDocument: "after", upsert: true }
    );

    console.log("findOneAndUpdate result:", result);

    // Always send a valid JSON response
    const count = result.value?.count ?? 0;
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default app;
