import NGO from "../model/NGO.js";
import mongoose from "mongoose";

const Dashboard = async (req, res) => {
  const { user_id } = req.cookies;
  try {
    const response = await NGO.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(user_id),
        },
      },
      {
        $lookup: {
          from: "announcements",
          localField: "_id",
          foreignField: "ngo_id",
          as: "announcements",
        },
      },
      {
        $lookup: {
          from: "events",
          localField: "_id",
          foreignField: "ngo_id",
          as: "events",
        },
      },
      {
        $lookup: {
          from: "donates",
          localField: "_id",
          foreignField: "ngo_id",
          as: "donates",
        },
      },
      {
        $lookup: {
          from: "volunteers",
          localField: "_id",
          foreignField: "ngo_id",
          as: "volunteers",
        },
      },
    ]);
    return res.json(response[0]);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Dashboard };
