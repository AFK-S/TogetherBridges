import express from "express";
import { Register as RegisterVolunteer } from "../controllers/Volunteer.js";
import { Register as RegisterNGO } from "../controllers/NGO.js";
import { Register as RegisterEvent } from "../controllers/Event.js";
import { Register as RegisterDonate } from "../controllers/Donate.js";
import { Login, Logout } from "../controllers/index.js";

const router = express.Router();

router.post("/register/ngo", RegisterNGO);
router.post("/login", Login);
router.get("/logout", Logout);

router.post("/register/volunteer/:ngo_id", RegisterVolunteer);

router.post("/register/event", RegisterEvent);

router.post("/register/donate", RegisterDonate);

export default router;
