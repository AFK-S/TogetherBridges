import Donate from "../model/Donate.js";

const Register_Donate = async (req, res) => {
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

export default Register_Donate;