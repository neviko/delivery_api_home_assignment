import { DeliveryTypes } from "../common/enums/delivery-types.enum";
import { deliveryModel } from "../models/delivery.model";

export const bookDelivery = async (userId: string, timeSlotId: string) => {
  const delivery = new deliveryModel({
    timeSlot_id: timeSlotId,
    status: DeliveryTypes.created,
    user_id: userId,
  });
  await delivery.save();
  return delivery;
};

export const deleteDelivery = async (deliveryId: string) => {
  await deliveryModel.deleteOne({ _id: deliveryId });
};

export const getAllToday = async () => {
  const startTime = new Date();
  startTime.setHours(0, 0, 0, 0);

  const endTime = new Date();
  endTime.setHours(23, 59, 59, 999);

  const deliveries = await deliveryModel
    .find({ start_time: { $gte: startTime, $lt: endTime } })
    .populate("timeSlot_id");
  console.log(`deliveries are: ${deliveries}`);

  return deliveries;
};

export const getAllLastWeek = async () => {
  const now = new Date();
  const startTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 7
  );

  const endTime = new Date();
  endTime.setHours(23, 59, 59, 999);

  const deliveries = await deliveryModel
    .find({ start_time: { $gte: startTime, $lt: endTime } })
    .populate("timeSlot_id");
  console.log(`deliveries are: ${deliveries}`);

  return deliveries;
};
