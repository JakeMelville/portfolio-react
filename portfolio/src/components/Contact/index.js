import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faYahoo } from '@fortawesome/free-brands-svg-icons'
import './style.css'

function Contact() {
    return (
        <ul className="row w-100">
            <a href="https://github.com/JakeMelville" target="_blank">
                <li className="mt-2 pt-1 col-2"><FontAwesomeIcon icon={faGithub}/></li>
            </a>
            <a href="mailto:jakemelville@ymail.com" target="_blank">
                <li className="mt-2 pt-1 col-2"><FontAwesomeIcon icon={faYahoo}/></li>
            </a>
            <a href="https://twitter.com/jakemelville6" target="_blank">
                <li className="mt-2 pt-1 col-2"><FontAwesomeIcon icon={faTwitter} /></li>
            </a>
            <a href="https://facebook.com" target="_blank">
                <li className="mt-2 pt-1 col-2"><FontAwesomeIcon icon={faFacebook} /></li>
            </a>

        </ul>
    )
}

export default Contact;