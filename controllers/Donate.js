import Donate from "../model/Donate.js";
import Stripe from "stripe";
// import dotenv from "dotenv";
// dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

const Register = async (req, res) => {
  const { name, email_address, phone_number, amount, message } = req.body;
  const { ngo_id } = req.params;
  try {
    await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name,
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/ngo/${ngo_id}`,
      cancel_url: `${process.env.CLIENT_URL}/ngo/${ngo_id}`,
    });
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
