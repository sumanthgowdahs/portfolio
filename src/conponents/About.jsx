import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import image from "./download.jpeg"
import profilePic from './pofilepic.jpg'
import { useNavigate } from 'react-router-dom'



gsap.registerPlugin(ScrollTrigger);



function About({ classname, buttonClass }) {
  let Navigate = useNavigate()

  let navigateToSkills = () => {
    Navigate('/skills')
  }
  let navigateToHome = ()=>{
    Navigate('/')
  }

  useGSAP(() => {

    // & image scroll
    let tl = gsap.timeline()
    let tl2 = gsap.timeline()
    gsap.from(".aboutImage", {
      y: 100,
      duration: 1,
      opacity: 0,
      // scrollTrigger:{
      //   trigger:".aboutImage",
      //   start:"top 50%",
      //   end:"top 40%",
      //   markers:true,
      //   scrub:true
      // }
    })
    // &about box 2 scroll
    tl.from(".aboutHeading", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
      // ease: "bounce.out"
      // scrollTrigger:{
      //   trigger:".aboutHeading",
      //   // markers:true,
      //   start:"top 80%",
      //   end:"top 40%",
      //   // scrub:true

      // }
    })
    tl.from(".aboutParagraph", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.3
      // scrollTrigger:{
      //   trigger:".aboutParagraph",
      //   // markers:true,
      //   start:"top 80%",
      //   end:"top 40%",
      //   borderBottom:"2px solid black"
      //   // scrub:true

      // }
    })
    tl.from(".lastButton", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      rotate: -180
    })
    
    tl.from(".nextButton", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      rotate: 180
    })
    tl.to(".lastButton", {
      y: 10,
      repeat: -1,
      yoyo: true,
      rotate: -40,
      duration: 1,
      delay: 1
    })
    tl.to(".nextButton", {
      y: 10,
      repeat: -1,
      yoyo: true,
      rotate: 40,
      duration: 1,
      delay: 1
    })




  })
  return (
    <div style={classname} className='about'>
      

      <div className="aboutHeadingName">
        <h1 className='aboutHeading'>A</h1>
        <h1 className='aboutHeading'>B</h1>
        <h1 className='aboutHeading'>O</h1>
        <h1 className='aboutHeading'>U</h1>
        <h1 className='aboutHeading'>T</h1>
      </div>

      <div className="aboutBox">
        <div className="box1">
          <img className='aboutImage' src={profilePic} alt="" />
        </div>
        <div className="box2">


          <p className='aboutParagraph'>I am a  Frontend Web Developer with a solid foundation in ReactJS, JavaScript, HTML, CSS, and GSAP. As a recent graduate with a degree in ECE engineering from VTU University, I have a strong passion for creating dynamic and visually appealing web applications.</p>
          <br />
          <br />
          <p className='aboutParagraph'>
            I am eager to bring my technical knowledge and creative problem-solving abilities to a dynamic team. With a commitment to continuous learning and staying updated with the latest industry trends, I am excited to contribute to innovative projects and grow as a professional in the field of frontend development.
          </p>
        </div>

      </div>
      <div className='buttonDiv'>
      <button onClick={navigateToHome} className='lastButton' ><i class="fa-solid fa-circle-arrow-left"></i></button>
        <button onClick={navigateToSkills} className='nextButton' ><i class="fa-solid fa-circle-arrow-right"></i></button>
      </div>


    </div>
  )
}

export default About
