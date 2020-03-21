import express from "express";
import morgan from "morgan";
import path from "path";

import indexRoutes from "./routes/index";

// VARIABLES
const app = express();

// SETTINGS
app.set("port", process.env.PORT || 4000);

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.use("/api", indexRoutes);

// THIS FOLDERFOR THIS API WILL BE USE TO STORE IMG
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
