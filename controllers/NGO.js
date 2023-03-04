import NGO from "../model/NGO.js";
import { Register_NGO } from "./mailer.js";

const Register = async (req, res) => {
  try {
    const response = await NGO.create(req.body);
    res.cookie("user_id", response._id).json({
      type: "success",
      message: "Registered Successfully",
    });
    const { name, email_address, password } = response;
    Register_NGO(name, email_address, password);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const GetNGOs = async (req, res) => {
  try {
    const response = await NGO.find().lean();
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const GetNGO = async (req, res) => {
  const { ngo_id } = req.params;
  try {
    const response = await NGO.find({
      ngo_id: ngo_id,
    }).lean();
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register, GetNGOs, GetNGO };
