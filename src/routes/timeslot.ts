import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  createTimeSlot,
  getSlotsByAddress,
} from "../services/timeslot.service";

const router = express.Router();

/**
 * creates a new timeslot
 */
router.post(
  "/api/create-timeslot",
  [
    body("start_time").isDate().withMessage("start_time must be valid"),
    body("end_time").isDate().withMessage("end_time must be valid"),
    body("supported_postcodes")
      .isArray()
      .notEmpty()
      .withMessage("supported_postcodes must be valid"),
  ],
  async (req: Request, res: Response) => {
    const { start_time, end_time, supported_postcodes } = req.body;
    const timeslot = await createTimeSlot(
      start_time,
      end_time,
      supported_postcodes
    );

    res.status(201).send(timeslot);
  }
);

router.post(
  "/api/timeslots",
  [body("address").isEmpty().withMessage("address must be valid")],
  async (req: Request, res: Response) => {
    const { address } = req.body;
    const structuredAddress = await getSlotsByAddress(address);

    res.status(200).send(structuredAddress);
  }
);

export { router as timeSlotRouter };
