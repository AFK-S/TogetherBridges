import Volunteer from "../model/Volunteer.js";
import { Register_Volunteer as Volunteer_mail } from "./mailer.js";
import NGO from "../model/NGO.js";

const Register_Volunteer = async (req, res) => {
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
    Volunteer_mail(name, email_address, ngo_response.name);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export default Register_Volunteer;