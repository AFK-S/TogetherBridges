import Announcement from "../model/Announcement.js";
import Volunteer from "../model/Volunteer.js";
import NGO from "../model/NGO.js";
import { Announcement as Announcement_mail } from "./mailer.js";

const Register = async (req, res) => {
  const { description } = req.body;
  const { ngo_id } = req.params;
  try {
    await Announcement.create({
      ngo_id,
      description,
    });
    const ngo_response = await NGO.findById(ngo_id).lean();
    const email_response = await Volunteer.find({
      ngo_id: ngo_id,
    }).lean();
    res.json({
      type: "success",
      message: "Announcement added Successfully",
    });
    if (email_response.length !== 0) {
      Announcement_mail(
        email_response[0].email_address,
        ngo_response.name,
        description
      );
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const GetAnnouncement = async (req, res) => {
  const { ngo_id } = req.params;
  try {
    const response = await Announcement.find({
      ngo_id: ngo_id,
    }).lean();
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register, GetAnnouncement };
