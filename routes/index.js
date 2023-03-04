import express from "express";
import {
  Register as RegisterVolunteer,
  Login,
} from "../controllers/Volunteer.js";
import { Register as RegisterNGO } from "../controllers/NGO.js";
import { Register as RegisterEvent } from "../controllers/Event.js";
import { Register as RegisterDonate } from "../controllers/Donate.js";

const router = express.Router();

router.post("/register/volunteer", RegisterVolunteer);

router.post("/register/ngo", RegisterNGO);

router.post("/register/event", RegisterEvent);

router.post("/register/donate", RegisterDonate);

router.post("/login", Login);

export default router;
