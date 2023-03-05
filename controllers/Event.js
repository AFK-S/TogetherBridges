import Event from "../model/Event.js";

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
    return res.json({
      type: "success",
      message: "Event Registered Successfully",
    });
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

const GetEvent = async (req, res) => {
  const { event_id } = req.params;
  try {
    const response = await Event.findById(event_id).lean();
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register, GetEvents, GetEvent };
