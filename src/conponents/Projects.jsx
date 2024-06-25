import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import React, { useRef, useState, useEffect } from 'react'

function Projects() {

  // let [imageMove, setImageMove] = useState({ x: 0, y: 0 })
  // let imageDiv = useRef()
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setImageMove({ x: event.clientX, y: event.clientY });
  //   };
  //   document.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, [imageMove]);

  // useGSAP(() => {

  //   gsap.to(".ProjectImageDiv", {
      
  //     opacity: 1,
  //     duration: 0.4,
  //     x: imageMove.x-200,
  //     y: imageMove.y-200,
  //     width: 400,
  //     height: 200,
  //   })
  // }, [imageMove])


  return (
    <div className='projects'>

      <h1>PROJECTS</h1>
      <div className="projectsList">
        <div className='projectName'>
          <h1>Todo</h1>
          <div  className="ProjectImageDiv">
            <img src="https://pixabay.com/illustrations/idea-empty-paper-pen-light-bulb-1876659/" alt="" />
          </div>

        </div>
        <div className='projectName'>
          <h1>Todo</h1>
          {/* <button className="ProjectImageDiv">
          <img src="https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_1280.jpg" alt="" />
          </button> */}
          <div onClick={console.log("object")}  className="ProjectImageDiv">
            <img src="https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_1280.jpg" alt="" />
          </div>

        </div>
        <div className='projectName'>
          <h1>Todo</h1>
          <div  className="ProjectImageDiv">
            <img src="https://cdn.pixabay.com/photo/2017/02/13/02/17/project-management-2061635_1280.jpg" alt="" />
          </div>

        </div>
        <div className='projectName'>
          <h1>Todo</h1>
          <div  className="ProjectImageDiv">
            <img src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg" alt="" />
          </div>

        </div>


      </div>

    </div>
  )
}

export default Projects