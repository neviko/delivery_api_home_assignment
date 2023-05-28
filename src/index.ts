import mongoose from "mongoose";
import { app } from "./app";

import * as dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://nevo-cluster.l5zahor.mongodb.net/?retryWrites=true&w=majority",
    {
      user: "nevosayag",
      pass: process.env.MONGO_PASSWORD,
      dbName: "delivery",
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
