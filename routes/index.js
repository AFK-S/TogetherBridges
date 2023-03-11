import express from "express";
import {
  Register_NGO,
  GetNGOs,
} from "../controllers/NGO.js";
import Register_Announcement from "../controllers/Announcement.js";
import Register_Volunteer from "../controllers/Volunteer.js";
import Register_Event from "../controllers/Event.js";
import chatbot_response from "../controllers/ChatBot.js";
import Register_Donate from "../controllers/Donate.js";
import NGO from "../model/NGO.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/register/ngo", Register_NGO);
router.post("/register/volunteer/:ngo_id", Register_Volunteer);
router.post("/register/announcement/:ngo_id", Register_Announcement);
router.post("/register/event/:ngo_id", Register_Event);
router.post("/register/donate/:ngo_id", Register_Donate);
router.get("/ngos", GetNGOs);

router.get("/chatbot/:message", async (req, res) => {
  const { message } = req.params;
  try {
    const response = await chatbot_response(message);
    res.send(response);
  } catch (error) {
    res.status(400).json({
      type: "error",
      message: error.message,
    });
  }
});

router.get("/dashboard", async (req, res) => {
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
});

router.post("/login", async (req, res) => {
  const { email_address, password } = req.body;
  try {
    const response = await NGO.findOne({
      email_address,
      password,
    }).lean();
    if (response === null) {
      return res
        .status(400)
        .json({ type: "error", message: "Invalid Credentials" });
    }
    return res.cookie("user_id", response._id).json({
      type: "success",
      message: "Logged In Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
});

router.get("/logout", async (req, res) => {
  return res.clearCookie("user_id").json({
    type: "success",
    message: "Logged Out Successfully",
  });
});

export default router;
