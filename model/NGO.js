import mongoose from "mongoose";

const { Schema, connection } = mongoose;

const NGOSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Please add a User ID"],
    },
    about: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid about`,
      ],
      required: [true, "Please add a About"],
    },
  },
  {
    timestamps: true,
  }
);

const NGO = connection.useDb("TECH-NIGHT").model("NGO", NGOSchema);

export default NGO;
