import mongoose from "mongoose";

const { Schema, connection } = mongoose;

const AnnouncementSchema = new Schema(
  {
    ngo_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Please add a NGO ID"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Please add a Description"],
    },
  },
  {
    timestamps: true,
  }
);

const Announcement = connection
  .useDb("TECH-NIGHT")
  .model("ANNOUNCEMENT", AnnouncementSchema);

export default Announcement;
