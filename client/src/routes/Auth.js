import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Ngo from '../pages/Ngo'
import NGOcard from '../components/NGOcard'

const Auth = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ngo" element={<NGOcard />} />
      <Route path="/ngo/:id" element={<Ngo />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  )
}

export default Auth