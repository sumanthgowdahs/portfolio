import React , {useState} from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import NavBar from './conponents/NavBar'
import Home from './conponents/Home'
import About from './conponents/About'
import Skills from './conponents/Skills'
import Projects from './conponents/Projects'
import Contact from './conponents/Contact'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CursorDiv from './conponents/Cursordiv'

// import Skill2 from './conponents/Skill2'

function App() {

  // & dark and light theme toggle

  let [toggle , setToggle ]= useState(true)
  // & classname
  let classname = {
    backgroundColor : toggle? "black" : "white",
    color : toggle? "white" : "black"
  }
  //  & button classname
  let buttonClass = toggle? "buttonDark" : "buttonLight"
  // toggle? buttonClass="buttonDark" : buttonClass= "buttonLight"
  // & toggle function
  let togglefunction = ()=>{
    setToggle(!toggle)
  }

  
  
  return (
    <div className='app' style={classname}>
      <CursorDiv toggle={toggle}/>
      <BrowserRouter>
      <NavBar toggle={toggle} togglefunction={togglefunction} buttonClass={buttonClass}  classname={classname}/>

      

      <Routes>
        <Route path='/' element={<Home buttonClass={buttonClass} classname={classname}/>} />
        <Route path='/about' element={<About buttonClass={buttonClass} classname={classname}/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
// export { App, togglefunction }
export default App