import mongoose from "mongoose";

const { Schema, connection } = mongoose;

const EventSchema = new Schema(
  {
    ngo_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Please add a NGO ID"],
    },
    name: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z ]+$/,
        (props) => `${props.value} is not a valid event name`,
      ],
      required: [true, "Please add a Event Name"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Please add a Event Description"],
    },
    place: {
      type: String,
      trim: true,
      match: [/^[a-zA-Z ]+$/, (props) => `${props.value} is not a valid place`],
      required: [true, "Please add a Place"],
    },
    date: {
      type: Date,
      required: [true, "Please add a Event Date"],
    },
  },
  {
    timestamps: true,
  }
);

const Event = connection.useDb("TECH-NIGHT").model("EVENT", EventSchema);

export default Event;
