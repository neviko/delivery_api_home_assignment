import { ITimeSlot } from "../common/interfaces/timeslot.interface";
import { timeSlotModel } from "../models/timeslot.model";
import { getStructuredAddress } from "./address.service";

export const createTimeSlot = async (
  start_time: Date,
  end_time: Date,
  codes: string[]
) => {
  try {
    const timeSlot = new timeSlotModel({
      start_time,
      end_time,
      supported_postcodes: codes,
    });
    return timeSlot.save();
  } catch (e) {
    console.error(e);
  }
};

export const getSlotsByAddress = async (address: string): Promise<any[]> => {
  const structuredAddress = await getStructuredAddress(address);
  return await timeSlotModel.find({
    supported_postcodes: structuredAddress.postcode,
  });
};
