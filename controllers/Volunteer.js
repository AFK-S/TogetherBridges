import Volunteer from "../model/Volunteer.js";
import { Register_Volunteer } from "./mailer.js";
import NGO from "../model/NGO.js";

const Register = async (req, res) => {
  const { name, email_address, phone_number, gender, age } = req.body;
  const { ngo_id } = req.params;
  try {
    await Volunteer.create({
      ngo_id,
      name,
      email_address,
      phone_number,
      gender,
      age,
    });
    const ngo_response = await NGO.findById(ngo_id).lean();
    res.json({
      type: "success",
      message: "Registered Successfully",
    });
    Register_Volunteer(name, email_address, ngo_response.name);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const GetVolunteer = async (req, res) => {
  const { ngo_id } = req.params;
  try {
    const response = await Volunteer.find({
      ngo_id: ngo_id,
    }).lean();
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register, GetVolunteer };
