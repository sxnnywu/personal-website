import app, { connectDB } from "./app.js";

console.log("Starting server...");

connectDB()
  .then(() => {
    console.log("DB connected, starting to listen...");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("DB connection failed:", err);
    process.exit(1);
  });
