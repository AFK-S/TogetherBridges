import express from "express";
import { Register as RegisterVolunteer } from "../controllers/Volunteer.js";
import {
  Register as RegisterNGO,
  GetNGOs,
  GetNGO,
} from "../controllers/NGO.js";
import { Register as RegisterEvent } from "../controllers/Event.js";
import { Register as RegisterDonate } from "../controllers/Donate.js";
import { Login, Logout } from "../controllers/index.js";
import chatbot_response from "../controllers/ChatBot.js";

const router = express.Router();

router.post("/register/ngo", RegisterNGO);
router.post("/login", Login);
router.get("/logout", Logout);
router.post("/register/volunteer/:ngo_id", RegisterVolunteer);
router.post("/register/donate/:ngo_id", RegisterDonate);

router.post("/register/event", RegisterEvent);
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
router.get("/ngos", GetNGOs);
router.get("/ngos/:id", GetNGO);

export default router;
