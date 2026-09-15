import express from "express";
import healthRoutes from "./routes/healthRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/health", healthRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;