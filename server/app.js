import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

export let likesCollection;

// Routes
app.get("/likes", async (req, res) => {
  if (!likesCollection) return res.status(503).json({ error: "DB not ready" });
  try {
    const doc = await likesCollection.findOne({ _id: "likes" });
    res.json({ count: doc.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/likes", async (req, res) => {
  if (!likesCollection) return res.status(503).json({ error: "DB not ready" });
  try {
    const result = await likesCollection.findOneAndUpdate(
      { _id: "likes" },
      { $inc: { count: 1 } },
      { returnDocument: "after", upsert: true }
    );

    const count = result.value?.count ?? 0;
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default app;
