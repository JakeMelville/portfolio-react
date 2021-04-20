import React from 'react';
import Resume from './assets/images/JakeMelville_resume.pdf'
import './assets/style/style.css'

function Nav() {
    return (
        <ul id="sideBar" className="col">
            <li id="abtMe" className="mb-3">About Me</li>
            <li id="myApps" className="mb-3"><a href="/apps">My Applications</a></li>
            <li id="myResume" className="mb-3"><a href={Resume} target='_blank'>Resume</a></li>
            <li id="meContact" className='mb-4'>Contact Me</li>
        </ul>
    )
}

export default Nav;