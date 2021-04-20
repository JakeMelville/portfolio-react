import React from 'react'
import ProfPic from './images/profile.jpeg'
import Nav from '../Nav'
import Contact from '../Contact'
import './style.css'

function Aside() {
    return (
        <div>
            <div id="side" className="col-3 h-100" style={{
                backgroundColor: 'maroon'
            }}>
                <div className='row justify-content-center'>
                    <img id='prof' src={ProfPic} className="mt-3 col-8 rounded-circle" alt='' />
                </div>
                <h2 className="mt-3 text-center">Jake Melville</h2>
                <p className="mb-3 pb-3 text-center">Full-Stack Web Developer</p>
                <Nav />
                <Contact />
            </div>
        </div>

    )
}

export default Aside;