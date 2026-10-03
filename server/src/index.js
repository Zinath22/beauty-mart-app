import app from "./app.js";
import { connectDB, closeDB } from "./config/db.js";
import "./config/firebase.js";

const PORT = process.env.PORT || 5000;

try {
  await connectDB();
  const server = app.listen(PORT, () => console.log(`🚀 BeautyMart API running on http://localhost:${PORT}`));

  const shutdown = async () => {
    server.close();
    await closeDB();
    process.exit(0);
  };
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
} catch (err) {
  console.error("❌ Failed to start server:", err.message);
  process.exit(1);
}
