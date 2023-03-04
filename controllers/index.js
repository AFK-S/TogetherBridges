import User from "../model/User.js";

const Login = async (req, res) => {
  const { email_address, password } = req.body;
  try {
    const response = await User.findOne({
      email_address,
      password,
    }).lean();
    if (response === null) {
      return res
        .status(400)
        .json({ type: "error", message: "Invalid Credentials" });
    }
    return res.cookie("user_id", response._id).json({
      type: "success",
      message: "Logged In Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

const Logout = async (req, res) => {
  return res.clearCookie("user_id").json({
    type: "success",
    message: "Logged Out Successfully",
  });
};

export { Login, Logout };
