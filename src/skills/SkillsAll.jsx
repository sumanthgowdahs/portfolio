import React from 'react'
import { SkillsObj } from '../conponents/Data.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// & images import
import reactImage from './images/react.png'
import boostrapImage from './images/bootstrap.png'
import javascriptImage from './images/javascript.png'
import htmlImage from './images/html.png'
import cssImage from './images/css.png'
import gsapImage from './images/gsap.png'

function SkillsAll() {
    useGSAP(() => {

        gsap.from(".skillDes", {
            y: 100,
            opacity: 0,
            duration: 1,
        }
        )
        // gsap.from(".skillImages", {
        //     y: 100,
        //     opacity: 0,
        //     duration: 1,
        //     stagger: 0.2
        // })
    })







    return (
        <div className='skillsAll'>

            <div className="box1">
                <h3 className='skillDes'>I have a strong foundation in web technologies, with expertise in JavaScript, ReactJS, HTML, CSS, and Bootstrap. Additionally, I have experience with GSAP for creating animations and enhancing user interfaces.</h3>
            </div>
            <div className="box2">


                <img className='skillImages' src={reactImage} alt="" />
                <img className='skillImages' src={javascriptImage} alt="" />
                <img className='skillImages' src={htmlImage} alt="" />
                <img className='skillImages' src={cssImage} alt="" />
                <img className='skillImages' src={gsapImage} alt="" />
                <img className='skillImages' src={boostrapImage} alt="" />


            </div>
        </div>
    )
}

export default SkillsAll