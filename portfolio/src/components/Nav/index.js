import React from 'react';
import Resume from './assets/images/JakeMelville_resume.pdf'

function Nav() {
    return (
        <ul className="col">
            <li className="mb-3">About Me</li>
            <li className="mb-3"><a href="/apps">My Applications</a></li>
            <li className="mb-3"><a href={Resume} target='_blank'>Resume</a></li>
            <li className='mb-2'>Contact Me</li>
        </ul>
    )
}

export default Nav;