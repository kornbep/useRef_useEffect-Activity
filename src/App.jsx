// JANCHRISTIAN PELAYRE BSIT DC4 5PM-6PM MWF
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import HeaderBanner from './HeaderBanner.jsx'
// import CourseCard from './CourseCard.jsx'
// import SkillList from './SkillList.jsx'
// import { useState } from "react"
// import Header from './Header.jsx'
// import StudentCard from "./StudentCard.jsx"
// import AttendanceCounter from "./AttendanceCounter.jsx"
// import DraftEditor_starter from "./DraftEditor_starter.jsx"
import { useState } from 'react'
import { Route, Routes} from "react-router-dom"
import NavBar from "./NavBar.jsx"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Thankyou from "./Thankyou.jsx"

 
function App() {

 
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="Home" element ={<Home />} />
        <Route path="About" element ={<About />} />
        <Route path="Contact" element ={<Contact />} />
        <Route path="thank-you" element ={<Thankyou />} />
      </Routes>
    </div>
    
  )
}

  export default App;