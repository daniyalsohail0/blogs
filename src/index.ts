import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import blogRouter from "./routes/blogs-routes";
import { connectToDatabase } from "./db/database-connector";

dotenv.config();

const main = () => {
  const app = express();

  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());

  connectToDatabase();

  app.use("/api/v1", blogRouter);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

main();
