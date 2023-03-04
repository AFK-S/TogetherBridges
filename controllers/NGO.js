import User from "../model/User.js";
import NGO from "../model/NGO.js";

const Register = async (req, res) => {
  const { name, email_address, type_of_user, phone_number, about, password } =
    req.body;

  const user = new User({
    name,
    email_address,
    type_of_user,
    phone_number,
    password,
  });
  const volunteer = new NGO({
    user_id: user._id,
    about,
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

export { Register };
