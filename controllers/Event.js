import Event from "../model/Event.js";

const Register = async (req, res) => {
  const { ngo_id, name, description, date, time, location } = req.body;
  try {
    await Event.create({
      ngo_id,
      name,
      description,
      date,
      time,
      location,
    });
    return res.json({
      type: "success",
      message: "Registered Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register };
