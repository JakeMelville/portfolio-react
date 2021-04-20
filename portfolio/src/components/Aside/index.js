import React from 'react'
import ProfPic from './images/profile.jpeg'
import Nav from '../Nav'

function Aside() {
    return (
        <div>
            <div id="side" className="col-3 h-100">
                <img src={ProfPic} className="mt-3 col-8 rounded-circle center-block" alt=''/>
                <h2 className="mt-3">Jake Melville</h2>
                <p className="mb-3 pb-3">Full-Stack Web Developer</p>
                <Nav />
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