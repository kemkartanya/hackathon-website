import React from 'react'
import Overview from '../components/Overview'
import Timeline from '../components/Timeline'
import Faqs from '../components/Faqs'

const Home = () => {
  return (
    <>
      <div >
        <div align="right">
          <h1>Igniting a Revolution in HR Innovation</h1>
        </div>
        <div>
          <h1>getlinked Tech Hackathon 1.0</h1>
          <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big price</p>
          <button>Register</button> <br />
          <Date />
        </div>
        <div>
          <img src='' alt=''/>
        </div>
      </div>
      <br />
      <Overview />
      <br />
      <Timeline />
      <br />
      <Faqs />
      <br />
    </>
  )
}

export default Home