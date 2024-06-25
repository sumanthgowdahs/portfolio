import React from 'react'
import { SkillsObj } from '../conponents/Data'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// & images import
import reactImage from './images/react.png' 
import boostrapImage from './images/bootstrap.png'
import javascriptImage from './images/javascript.png'
import htmlImage from './images/html.png'
import cssImage from './images/css.png'
import gsapImage from './images/gsap.png'

function Skillsdetails() {

    useGSAP(() => {
        // gsap.from(".skillsDescription", {
        //     y: 100,
        //     opacity: 0,
        //     duration: 1,
        //     stagger: 0.2,
        //     scrollTrigger: {
        //         trigger: ".skillsDescription",
        //         start: "top 70%",
        //         end: "top 40%",
        //         markers: true
        //     }
        // })

        gsap.from(".react", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".react",
                start: "top 90%",
                end: "top 40%",
            }
        })
        gsap.from(".javascript", {
            y: 100,

            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".javascript",
                start: "top 90%",
                end: "top 40%"
            }
        })
        gsap.from(".html", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".html",
                start: "top 90%",
                end: "top 40%",
            }
        })
        gsap.from(".css", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".css",
                start: "top 90%",
                end: "top 40%",
            }
        })
        gsap.from(".gsap", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".gsap",
                start: "top 90%",
                end: "top 40%",
            }
        })

    })

    let dataArr = [...SkillsObj]
    console.log(dataArr);
    return (
        <div className='skillsDetails'>

            <div className="skillBox">
                <div className="box1">
                    <h3 className='skillsDescription react'>I am proficient in React, including core concepts such as props, JSX, data binding, and the Context API. I have extensive experience with hooks like useState, useEffect, useContext, useReducer, useCallback, useMemo, and useRef. My expertise also includes handling prop drilling, using fragments, managing routing with libraries like React Router, ensuring type safety with PropTypes, fetching APIs with Axios, optimizing performance with the virtual DOM, and implementing lazy loading.</h3>
                </div>
                <div className="box2">
                    <img className='skillsImage' src={reactImage} alt="" />
                </div>
            </div>

            {/* javascript */}
            <div className="skillBox">
                <div className="box1">
                    <h3 className='skillsDescription javascript'>I am proficient in advanced JavaScript concepts, including array methods, asynchronous programming with async/await, and ES6 features such as promises and destructuring. Additionally, I have expertise in closures, hoisting, and the 'this' object.</h3>
                </div>
                <div className="box2">
                    <img className='skillsImage' src={javascriptImage} alt="" />
                </div>
            </div>
            {/* html */}
            <div className="skillBox">
                <div className="box1">
                    <h3 className='skillsDescription html'>I have a strong command of HTML, encompassing essential elements, semantic markup, forms, and accessibility features. Additionally, I ensure compatibility across different browsers and devices.</h3>
                </div>
                <div className="box2">
                    <img className='skillsImage' src={htmlImage} alt="" />
                </div>
            </div>
            {/* css */}
            <div className="skillBox">
                <div className="box1">
                    <h3 className='skillsDescription css'>My CSS skills cover a broad spectrum, including proficiency in styling elements, layouts, and responsive design using media queries,  modern techniques such as flexbox and grid layouts. With a focus on clean, maintainable code, I strive to create visually appealing and user-friendly interfaces.</h3>
                </div>
                <div className="box2">
                    <img className='skillsImage' src={cssImage} alt="" />
                </div>
            </div>
            {/* gsap */}
            <div className="skillBox">
                <div className="box1">
                    <h3 className='skillsDescription gsap'>Proficient in GSAP, the GreenSock Animation Platform, including advanced features like ScrollTrigger and smooth scrolling. I leverage GSAP to create fluid and engaging animations for web applications, seamlessly integrating scroll-based triggers and achieving smooth transitions and interactive effects. With GSAP's timeline capabilities and plugins, I enhance user experiences with dynamic and visually stunning animations.</h3>
                </div>
                <div className="box2">
                    <img className='skillsImage' src={gsapImage } alt="" />
                </div>
            </div>
            {/* bootstrap */}
            <div className="skillBox">
                <div className="box1">
                    <h3 className='skillsDescription'></h3>
                </div>
                <div className="box2">
                    <img className='skillsImage' src={boostrapImage} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Skillsdetails