import mongoose from "mongoose";

const { Schema, connection } = mongoose;

const DonateSchema = new Schema(
  {
    ngo_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Please add a NGO ID"],
    },
    name: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid name`,
      ],
    },
    email_address: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        (props) => `${props.value} is not a valid email`,
      ],
    },
    phone_number: {
      type: String,
      trim: true,
      match: [
        /^[0-9]{10}$/,
        (props) => `${props.value} is not a valid phone number`,
      ],
    },
    amount: {
      type: Number,
      required: [true, "Please add a Amount"],
    },
    message: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid description`,
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Donate = connection.useDb("TECH-NIGHT").model("DONATE", DonateSchema);

export default Donate;
