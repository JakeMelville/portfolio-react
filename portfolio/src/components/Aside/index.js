import React from 'react'
import ProfPic from './images/profile.jpeg'

function Aside() {
    return (
        <div>
            <div id="side" className="col-3 h-100">
                <img src={ProfPic} className="mt-3 col-8 rounded-circle center-block" alt=''/>
                <h2 className="mt-3">Jake Melville</h2>
                <p className="mb-3 pb-3">Full-Stack Web Developer</p>
                <ul id="sideBar" className="col mb-5 mt-5">
                    <li id="abtMe" className="mb-3">About Me</li>
                    <li id="myApps" className="mb-3"><a href="apps.html">My Applications</a></li>
                    <li id="myResume" className="mb-3"><a href='./assets/images/JakeMelville_resume.pdf' target='_blank'>Resume</a></li>
                    <li id="meContact">Contact Me</li>
                </ul>
                <ul className="col-12 w-100">
                    <a href="https://github.com/JakeMelville" target="_blank">
                        <li className="mt-2 pt-2 col-2 fa fa-github"></li>
                    </a>
                    <a href="mailto:jakemelville@ymail.com" target="_blank">
                        <li className="mt-2 pt-2 col-lg-2 col-sm-1 fa fa-envelope"></li>
                    </a>
                    <a href="https://twitter.com/jakemelville6" target="_blank">
                        <li className="mt-2 pt-2 col-2 fa fa-twitter"></li>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <li className="mt-2 pt-2 col-2 fa fa-facebook"></li>
                    </a>

                </ul>
            </div>
        </div>

    )
}

export default Aside;