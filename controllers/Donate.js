import Donate from "../model/Donate.js";

const Register = async (req, res) => {
  const { name, email_address, phone_number, amount, message } = req.body;
  try {
    await Donate.create({
      name,
      email_address,
      phone_number,
      amount,
      message,
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
