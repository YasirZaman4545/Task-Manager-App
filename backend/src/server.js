import app from "./app.js";
import env from "./config/env.js";

const server = app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
  console.log(`Environment: ${env.nodeEnv}`);
});

const shutdown = () => {
  console.log("Shutting down server...");

  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);