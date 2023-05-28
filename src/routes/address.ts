import express, { Request, Response } from "express";
import { body } from "express-validator";
import { getStructuredAddress } from "../services/address.service";
import { IAddress } from "../common/interfaces/address.interface";

const router = express.Router();

/**
 * returns an address structure
 */
router.post(
  "/api/resolve-address",
  [body("address").isEmpty().withMessage("address must be valid")],
  async (req: Request, res: Response) => {
    const { address } = req.body;
    const structuredAddress = (await getStructuredAddress(address)) as IAddress;

    res.status(200).send(structuredAddress);
  }
);

export { router as addressRouter };
