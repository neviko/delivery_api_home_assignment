import mongoose from "mongoose";
import { DeliveryTypes } from "../common/enums/delivery-types.enum";

const deliverySchema = new mongoose.Schema({
  status: {
    type: String,
    enum: DeliveryTypes,
    required: true,
  },
  timeSlot_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "timeSlot",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const deliveryModel = mongoose.model("delivery", deliverySchema);
export { deliveryModel };
