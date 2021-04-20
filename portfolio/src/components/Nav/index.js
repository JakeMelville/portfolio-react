import React from 'react';


function Nav() {
    return (
        <ul id="sideBar" className="col mb-5 mt-5">
            <li id="abtMe" className="mb-3">About Me</li>
            <li id="myApps" className="mb-3"><a href="apps.html">My Applications</a></li>
            <li id="myResume" className="mb-3"><a href='./assets/images/JakeMelville_resume.pdf' target='_blank'>Resume</a></li>
            <li id="meContact">Contact Me</li>
        </ul>
    )
}

export default Nav;