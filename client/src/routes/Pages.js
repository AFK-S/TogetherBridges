import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import { Routes, Route } from 'react-router-dom'
import Ngo from '../pages/Ngo'

const Pages = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ngo" element={<Ngo />} />
                <Route path="*" element={<h1 className='text-3xl font-bold text-center my-80'>404 Not Found</h1>} />
            </Routes>
        </>
    )
}

export default Pages