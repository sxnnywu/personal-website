import app, { connectDB } from "./app.js";

connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error("Failed to connect to DB:", err);
  process.exit(1);
});
