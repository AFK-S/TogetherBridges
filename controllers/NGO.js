import User from "../model/User.js";
import NGO from "../model/NGO.js";

const Register = async (req, res) => {
  const { name, email_address, phone_number, about, password } = req.body;

  const user = new User({
    name,
    email_address,
    phone_number,
    password,
  });
  const ngo = new NGO({
    user_id: user._id,
    about,
  });
  try {
    await Promise.all([user.validate(), ngo.validate()]);
    await Promise.all([user.save(), ngo.save()]);
    return res.cookie("user_id", response._id).json({
      type: "success",
      message: "Registered Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const GetNGOS = async (req, res) => {
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

export { Register, GetNGOS, GetNGO };
