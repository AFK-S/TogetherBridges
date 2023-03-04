import Volunteer from "../model/Volunteer.js";

const Register = async (req, res) => {
  const { ngo_id, name, email_address, phone_number, gender, age } = req.body;
  try {
    await Volunteer.create({
      ngo_id,
      name,
      email_address,
      phone_number,
      gender,
      age,
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

const GetVolunteer = async (req, res) => {
  const { ngo_id } = req.params;
  try {
    const response = await Volunteer.find({
      interested_ngo: {
        $in: [ngo_id],
      },
    }).lean();
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register, GetVolunteer };
