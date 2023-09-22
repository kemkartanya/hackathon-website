import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Register from '../pages/Register'
import Timeline from '../components/Timeline'
import Overview from '../components/Overview'
import Faqs from '../components/Faq/Faqs'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Routers