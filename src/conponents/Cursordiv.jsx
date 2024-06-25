import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

function CursorDiv({toggle}) {
  let [cursorMove, setCursorMove] = useState({x:0,y:0})
  // console.log(toggle);

 

    useEffect(() => {
      const handleMouseMove = (event) => {
        setCursorMove({x: event.clientX, y: event.clientY });
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, [cursorMove]);

    // console.log(cursorMove);

    useGSAP(()=>{
      gsap.to(".cursorDiv , .cursorDiv2" , {
        duration:0.2,
        x: cursorMove.x,
        y:cursorMove.y,
        
      })
    },[cursorMove])
    // useGSAP(()=>{
    //   gsap.to(".cursorDiv2" , {
    //     duration:0.7,
    //     x: cursorMove.x,
    //     y:cursorMove.y
    //   })
    // },[cursorMove])
  
  

 let cursorDivClassName = toggle? "cursorDiv" : "cursorDiv2"
  return (
    <div  className={cursorDivClassName}></div>
  )
}

export default CursorDiv