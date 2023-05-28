import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  bookDelivery,
  deleteDelivery,
  getAllLastWeek,
  getAllToday,
} from "../services/delivery.service";

const router = express.Router();

/**
 * returns a delivery structure
 */
router.post(
  "/api/delivery",
  [
    body("user_id").isEmpty().withMessage("address must be valid"),
    body("timeslot_id").isEmpty().withMessage("timeslot_id must be valid"),
  ],
  async (req: Request, res: Response) => {
    const { user_id, timeslot_id } = req.body;
    const delivery = await bookDelivery(user_id, timeslot_id);
    res.status(200).send(delivery);
  }
);

router.delete(
  "/api/delivery/:id",

  async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteDelivery(id);
    res.status(204).send();
  }
);

router.get("/api/delivery/daily", async (req: Request, res: Response) => {
  const todayDeliveries = await getAllToday();
  res.status(200).send(todayDeliveries);
});

router.get("/api/delivery/weekly", async (req: Request, res: Response) => {
  const weeklyDeliveries = await getAllLastWeek();
  res.status(200).send(weeklyDeliveries);
});

export { router as deliveryRouter };
