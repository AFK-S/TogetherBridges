import Event from "../model/Event.js";
import Volunteer from "../model/Volunteer.js";
import NGO from "../model/NGO.js";
import { Event as Event_mail } from "./mailer.js";

const Register = async (req, res) => {
  const { name, description, place, date } = req.body;
  const { ngo_id } = req.params;
  try {
    await Event.create({
      ngo_id,
      name,
      description,
      place,
      date,
    });
    const ngo_response = await NGO.findById(ngo_id).lean();
    const email_response = await Volunteer.find({
      ngo_id: ngo_id,
    }).lean();
    res.json({
      type: "success",
      message: "Event Registered Successfully",
    });
    if (email_response.length !== 0) {
      Event_mail(
        email_response[0].email_address,
        ngo_response.name,
        name,
        description
      );
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const GetEvents = async (req, res) => {
  const { ngo_id } = req.params;
  try {
    const response = await Event.find({
      ngo_id: ngo_id,
    }).lean();
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register, GetEvents };
