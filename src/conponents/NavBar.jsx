import { useGSAP  } from '@gsap/react'
import gsap from 'gsap'
import React,{useState} from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
// import { togglefunction } from '../App'

function NavBar({classname, buttonClass ,togglefunction , toggle}) {

  

  let classname2 = JSON.parse(JSON.stringify(classname))

  classname2.backgroundColor = "transparent"
 

  // & gsap animations
  useGSAP(()=>{
gsap.from(".links" , {
  y:-100,
  duration:0.5,
  opacity:0,
  stagger:0.1,
})
})

  

 
 
  return (
    <nav style={classname2}>
      
        <Link className='links' style={{color:classname.color}} to='/' >Home</Link>
        <Link className='links' style={{color:classname.color}} to='/about' >About</Link>
        <Link className='links' style={{color:classname.color}} to='/skills' >Skills</Link>
        <Link className='links' style={{color:classname.color}} to='/projects' >Projects</Link>
        <Link className='links' style={{color:classname.color}} to='/contact' >Contact</Link>
        <div className='theme'>
      <button  className={`${buttonClass} links` } onClick={()=>{togglefunction()}}>{toggle ? <i  class="fa-regular fa-lightbulb"></i> : <i class="fa-solid fa-lightbulb"></i>}</button>

        </div>
    </nav>
  )
}

export default NavBar