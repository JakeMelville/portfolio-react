import React from 'react'
import ProfPic from './assets/images/profile.jpeg'
import Nav from '../Nav'
import Contact from '../Contact'
import './assets/style/style.css'

function Aside(props) {
    return (
        <div id="side" className="col-3" style={{
            backgroundColor: 'maroon'
        }}>
            <div className='row justify-content-center'>
                <img id='prof' src={ProfPic} className="mt-3 col-8 rounded-circle" alt='' />
            </div>
            <h2 className="mt-3 text-center">Jake Melville</h2>
            <p id='title' className="mb-3 pb-1 text-center">Full-Stack Web Developer</p>
            <Nav showAboutMe={props.showAboutMe}
                showContactCard={props.showContactCard} />
            <Contact />
        </div>

    )
}

export default Aside;