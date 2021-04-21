import React from 'react'
import './assets/style/style.css'
import Resume from './assets/images/JakeMelville_resume.pdf'

function Main() {

    return (

        <div id="welcome" className="col-9">
            <div className="row w-100">
                <h1 className="mt-5 pt-5 ml-5 pl-5 mb-3 col-12">Hi, I'm Jake.</h1>
                <h1 className="ml-5 pl-5 mb-3 pb-3 col-12">Full-Stack Web-Developer</h1>
                <div className="ml-5 pl-5 text-center col-3"><button id="appBtn" className="btn btn-secondary"><a
                    href="/apps">My
                        Apps</a></button>
                </div>
                <div className="mr-5 pr-5 text-center col-3"><button id="resumeBtn"
                    className="btn btn-secondary"><a href={Resume} target='_blank' rel="noreferrer">Resume</a></button>
                </div>
                <div id="aboutMe" className="col-9 mt-4 pt-4 ml-4 pl-4">
                    <div className="row">
                        <div className="col-12">
                            <div id="aboutCard" className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">About Me</h5>
                                    <p className="card-text">My name is Jake Melville. I was born and raised in
                                    Sparta, NJ. I am a full-stack developer based in the NYC Metropolitan
                                    Area, specializing in the building and designing of applications,
                                    websites and anything in between!
                                        </p>
                                    <p className="card-text text-left">
                                        <strong>Front-End Skills:</strong> HTML, CSS, BootStrap, JavaScript, J Query, Responsive Design, Testing/ Debugging
                                            <strong className="text-left">Back-End Skills:</strong> MySql, MongoDB, API
                                        </p>

                                    <a href="/" id="exitBtn" type="reset"
                                        className="btn btn-primary">Exit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <div id="contactCard" className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Contact Me</h5>
                                    <ul id="contactUl" className="card-text">
                                        <li>GitHub: <a href="https://github.com/JakeMelville"
                                            target="_blank" rel="noreferrer">https://github.com/JakeMelville</a></li>
                                        <li>Email: <a href="jake.melville15@gmail.com"
                                            target="_blank" rel="noreferrer">jake.melville15@gmail.com</a></li>
                                        <li>Twitter: <a href="https://twitter.com/jakemelville6"
                                            target="_blank" rel="noreferrer">https://twitter.com/jakemelville6</a></li>
                                    </ul>
                                    <a href="/" id="exitBtn" type="reset"
                                        className="btn btn-primary">Exit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main;