
import './App.css'
import { useState } from 'react'
import FakeApiStore from './Components/FakeApiStore'
import WeatherApi from './Components/WeatherApi'
import Home from './Pages/Home'

function App() {

  // const [show, setShow] = useState(false)
  return (
    <>
      {/* <button onClick={()=>setShow(show=> !show)}>
      show
      </button>
      { show && <Test/>} */}
      {/* <FakeApiStore/>
      <WeatherApi/> */}
      <Home/>
    </>
  )
}

export default App
