import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ classname,buttonClass }) => {
let Navigate = useNavigate()
 let NavigateToAbout = ()=>{
  Navigate("/about")
 }

  useGSAP(()=>{
    

  let tl = gsap.timeline()

      
  
    
      tl.from(".myName", {
        duration:0.7,
        opacity:0,
        // ease: "bounce.out",
        y: 100,
        stagger:0.1
        });
      
      
      tl.from(".homeButton",{
        y:100,
        opacity:0,
        duration:0.5,
        stagger:0.3,
        rotate:180
      })
      
      tl.from(".introParagraph",{
        y:100,
        opacity:0,
        duration:0.5,
        stagger:0.3
      })
      tl.to("span .myName",{
        borderBottom:`5px solid ${classname.color}`,
      })
      tl.to(".homeButton",{
        y:10,
        repeat:-1,
        yoyo:true,
        rotate: 40,
        duration:1,
        delay:1
      })

  },)
  



  return (
    <div style={classname} className='home'>
      (
        <div className="introSection">
          <div className='introNames'>
            <h1 className='myName'>H</h1>
            <h1 className='myName'>e</h1>
            <h1 className='myName'>l</h1>
            <h1 className='myName'>l</h1>
            <h1 className='myName'>o</h1>
            <pre> </pre>
            <h1 className='myName'>,</h1>
            <pre> </pre>
            <h1 className='myName'>i</h1>
            <h1 className='myName'>'</h1>
            <h1 className='myName aa'>a</h1>
            <h1 className='myName'>m</h1>
            <pre> </pre>
            <span>
            <h1 className='myName'>S</h1>
            <h1 className='myName'>u</h1>
            <h1 className='myName'>m</h1>
            <h1 className='myName'>a</h1>
            <h1 className='myName'>n</h1>
            <h1 className='myName'>t</h1>
            <h1 className='myName'>h</h1>
            </span>
            
            
          </div>
          <p className='introParagraph'>I am a passionate developer specializing  in front-end  technologies. </p>
            <br />
            <p className='introParagraph'>Dive in to see my work and get to know me better!</p>
          <div className='buttonDiv'>
            <button onClick={NavigateToAbout} className={`homeButton`}><i class="fa-solid fa-circle-arrow-right"></i></button>
          </div>
          
        </div>
      )
       
    </div>
  );
};

export default Home;
