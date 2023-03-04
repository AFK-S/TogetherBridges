import User from "../model/User.js";
import Volunteer from "../model/Volunteer.js";

const Register = async (req, res) => {
  const {
    name,
    email_address,
    type_of_user,
    phone_number,
    interested_ngo,
    gender,
    password,
  } = req.body;

  const user = new User({
    name,
    email_address,
    type_of_user,
    phone_number,
    password,
  });
  const volunteer = new Volunteer({
    user_id: user._id,
    interested_ngo,
    gender,
  });
  try {
    await Promise.all([user.validate(), volunteer.validate()]);
    await Promise.all([user.save(), volunteer.save()]);
    return res.cookie("user_id", response._id).json({
      type: "success",
      message: "Registered Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ type: "error", message: err.message });
  }
};

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

export { Register, Login };
