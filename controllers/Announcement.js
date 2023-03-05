import Announcement from "../model/Announcement.js";

const Register = async (req, res) => {
  const { description } = req.body;
  const { ngo_id } = req.params;
  try {
    await Announcement.create({
      ngo_id,
      description,
    });
    return res.json({
      type: "success",
      message: "Announcement added Successfully",
    });
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
