import express from "express";
import cors from "cors";

import { json } from "body-parser";
import { timeSlotRouter } from "./routes/timeslot";
import { addressRouter } from "./routes/address";
import { deliveryRouter } from "./routes/delivery";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5000", "*"],
  })
);
app.use(json());
app.use(timeSlotRouter);
app.use(addressRouter);
app.use(deliveryRouter);
// if a route not found call to not found error, which it will call to error handler
app.all("*", async () => {
  // not found
});

export { app };
