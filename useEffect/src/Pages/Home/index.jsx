import React from 'react'
import FakeApiStore from '../../Components/FakeApiStore'
import WeatherApi from '../../Components/WeatherApi'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <FakeApiStore/>
    <WeatherApi/>
    <Footer/>
    
    </>
  )
}

export default Home