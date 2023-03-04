import mongoose from "mongoose";

const { Schema, connection } = mongoose;

const VolunteerSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Please add a User ID"],
    },
    interested_ngo: {
      type: Array,
      required: [true, "Please add a Interested NGO"],
    },
    gender: {
      type: String,
      trim: true,
      enum: ["male", "female"],
      match: [
        /^(male|female)$/,
        (props) => `${props.value} is not a valid gender`,
      ],
      required: [true, "Please add a Gender"],
    },
  },
  {
    timestamps: true,
  }
);

const Volunteer = connection
  .useDb("TECH-NIGHT")
  .model("VOLUNTEER", VolunteerSchema);

export default Volunteer;
