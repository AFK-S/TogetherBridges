import NGO from "../model/NGO.js";
import { Register_NGO as NGO_mail } from "./mailer.js";

const Register_NGO = async (req, res) => {
  try {
    const response = await NGO.create(req.body);
    res.cookie("user_id", response._id).json({
      type: "success",
      message: "Registered Successfully",
    });
    const { name, email_address, password } = response;
    NGO_mail(name, email_address, password);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const GetNGOs = async (req, res) => {
  try {
    const response = await NGO.aggregate([
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
    ]);
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register_NGO, GetNGOs };