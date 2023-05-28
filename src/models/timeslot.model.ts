import mongoose from "mongoose";

const timeSlotSchema = new mongoose.Schema({
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
  supported_postcodes: {
    type: [String],
    required: true,
  },
});

const timeSlotModel = mongoose.model("timeSlot", timeSlotSchema);
export { timeSlotModel };
