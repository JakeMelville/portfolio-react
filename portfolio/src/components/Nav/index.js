import React from 'react';
import Resume from './assets/images/JakeMelville_resume.pdf'
import './assets/style/style.css'

function Nav(props) {
    return (
        <ul id="sideBar" className="col">
            <li id="abtMe" className="mb-3" onClick={props.showAboutMe}>About Me</li>
            <li id="myApps" className="mb-3"><a href="/apps">My Applications</a></li>
            <li id="myResume" className="mb-3"><a href={Resume} target='_blank' rel="noreferrer">Resume</a></li>
            <li id="meContact" className='mb-4' onClick={props.showContactCard}>Contact Me</li>
        </ul>
    )
}

export default Nav;