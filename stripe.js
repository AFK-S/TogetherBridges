import express from 'express'
import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()

const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router()

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/ngopage`,
  })

  res.send({ url: session.url })
})

export default router
