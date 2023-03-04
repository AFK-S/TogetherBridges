import NGO from "../model/NGO.js";

const Register = async (req, res) => {
  const {
    name,
    email_address,
    phone_number,
    in_charge_name,
    address,
    about,
    password,
  } = req.body;
  try {
    const response = await NGO.create({
      name,
      email_address,
      phone_number,
      in_charge_name,
      address,
      about,
      password,
    });
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
