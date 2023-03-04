import mongoose from "mongoose";

const { Schema, connection } = mongoose;

const VolunteerSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid name`,
      ],
      required: [true, "Please add a Name"],
    },
    email_address: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        (props) => `${props.value} is not a valid email`,
      ],
      required: [true, "Please add an Email Address"],
      unique: true,
    },
    phone_number: {
      type: String,
      trim: true,
      match: [
        /^[0-9]{10}$/,
        (props) => `${props.value} is not a valid phone number`,
      ],
      required: [true, "Please add a Phone Number"],
      unique: true,
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
    interested_ngo: {
      type: Array,
      required: [true, "Please add a Interested NGO"],
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
