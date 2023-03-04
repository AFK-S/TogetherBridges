import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const itemtocheckout = {
  user: 'Aditya',
  amount: 300,
}

function CheckoutBtn() {
  const handleCheckout = () => {
    axios
      .post(`/stripe/create-checkout-session`, { itemtocheckout })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return <button onClick={() => handleCheckout()}>Check Out</button>
}

export default CheckoutBtn
