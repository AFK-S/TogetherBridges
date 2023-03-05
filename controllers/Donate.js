import Donate from "../model/Donate.js";

const Register = async (req, res) => {
  const { name, email_address, phone_number, amount, message } = req.body;
  const { ngo_id } = req.params;
  try {
    await Donate.create({
      ngo_id,
      name,
      email_address,
      phone_number,
      amount,
      message,
    });
    return res.json({
      type: "success",
      message: "Donation Successful",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const GetDonate = async (req, res) => {
  const { ngo_id } = req.params;
  try {
    const response = await Donate.find({
      ngo_id: ngo_id,
    }).lean();
    return res.send(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

export { Register, GetDonate };
