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
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid event name`,
      ],
      required: [true, "Please add a Event Name"],
    },
    description: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid event description`,
      ],
      required: [true, "Please add a Event Description"],
    },
    date: {
      type: Date,
      required: [true, "Please add a Event Date"],
    },
    time: {
      from: {
        type: String,
        trim: true,
        match: [
          /^[0-9]{2}:[0-9]{2}$/,
          (props) => `${props.value} is not a valid event time`,
        ],
        required: [true, "Please add a Event Time"],
      },
      to: {
        type: String,
        trim: true,
        match: [
          /^[0-9]{2}:[0-9]{2}$/,
          (props) => `${props.value} is not a valid event time`,
        ],
        required: [true, "Please add a Event Time"],
      },
    },
    location: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid event location`,
      ],
      required: [true, "Please add a Event Location"],
    },
  },
  {
    timestamps: true,
  }
);

const Event = connection.useDb("TECH-NIGHT").model("EVENT", EventSchema);

export default Event;
