import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Routes from './routes/index.js'
import Stripe from './stripe.js'

const app = express()
const port = process.env.PORT || 8000

try {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Connected to MongoDB')
} catch (error) {
  console.log(error)
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())
app.use('/stripe', Stripe)

app.use('/api', Routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
