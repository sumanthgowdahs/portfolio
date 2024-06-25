
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SkillsAll from '../skills/SkillsAll'
import Skillsdetails from '../skills/Skillsdetails'
import { Navigate, useNavigate } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger);



function Skills() {
  let Navigate = useNavigate()

  let tl = gsap.timeline()
  

  let navigateToAbout = ()=>{
    console.log("about");
    Navigate('/about')
  }
  let navigateToProjects = ()=>{
    Navigate('/projects')
  }



  useGSAP(() => {
tl.from(".skillletter",{
  y:100,
  opacity:0,
  duration:1,
  // ease:"bounce.out",
  stagger:0.2
})
tl.from(".nextButton",{
  y:100,
  opacity:0,
  duration:1
})
tl.from(".lastButton",{
  y:100,
  opacity:0,
  duration:1
})

tl.to('.nextButton',{
  repeat:-1,
  yoyo:true,
  duration: 1,
  delay:1,
  rotate: 40
})
tl.to('.lastButton',{
  repeat:-1,
  yoyo:true,
  duration: 1,
  delay:1,
  rotate: -40
})
  })



  return (
 
    <div className='Skills'>
      
      <div className="skillHeading">
        <h1 className='skillletter'>S</h1>
        <h1 className='skillletter'>K</h1>
        <h1 className='skillletter'>I</h1>
        <h1 className='skillletter'>L</h1>
        <h1 className='skillletter'>L</h1>
        <h1 className='skillletter'>S</h1>
        
      </div>
      <SkillsAll/>
      <Skillsdetails/>
      <div className='buttonDiv'>
      <button onClick={navigateToAbout} className='lastButton' ><i class="fa-solid fa-circle-arrow-left"></i></button>
        <button onClick={navigateToProjects} className='nextButton' ><i class="fa-solid fa-circle-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default Skills




