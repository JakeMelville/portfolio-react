import React from 'react'
import Cov from './assets/images/cov.jpg'
import Avengers from './assets/images/avengers.png'
import Tech from './assets/images/tch blog.jpg'
import Notes from './assets/images/notes.png'
import Weather from './assets/images/weather.jpg'
import Scheduler from './assets/images/scheduler.jpg'

import './assets/style/style.css'


function Apps() {
    return (
        <div>
            <h1 id="jumbo" className="jumbotron text-center">My Applications</h1>
            <div className="container">
                <div className="row justify-content-around m-2 p-2">
                    <div className="card col-3 m-2">
                        <img className="card-img-top" src={Cov} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Covid-19 Relief</h5>
                            <p className="card-text">Covid-19 Relief is a one stop shop for all information covid related. On the
                            sight you will see both a test center locator and a vaccine finder. Allows a user to sign in and
                        save the test location that they visited. </p>
                            <button className="btn btn-primary"><a href="https://covid-19-relief.herokuapp.com/" target='_blank' rel="noreferrer">See Project</a></button>
                        </div>
                    </div>
                    <div className="card col-3 m-2">
                        <img className="card-img-top" src={Avengers} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Avengers Interactive Fan Page</h5>
                            <p className="card-text">This application is designed for the Avengers fan. Has information about all
                        characters, live twitter feeds, and a quiz to test the user's knowledge!</p>
                            <button className="btn btn-primary"><a href="https://jakemelville.github.io/avengers/" target='_blank' rel="noreferrer">See Project</a></button>
                        </div>
                    </div>
                    <div className="card col-3 m-2" >
                        <img className="card-img-top" src={Tech} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Tech Blog</h5>
                            <p className="card-text">Tech Blog was designed for the user to be able to comment and post. The user
                        must sign in to use the application. Each post will be tagged with the user who wrote it. </p>
                            <button className="btn btn-primary"><a href="https://jakemelville.github.io/tech-blog/" target='_blank' rel="noreferrer">See Project</a></button>
                            
                        </div>
                    </div>
                    <div className="card col-3 m-2">
                        <img className="card-img-top" src={Notes} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Note-Taker</h5>
                            <p className="card-text">This application was designed for the user to save/delete notes in a quick and
                        efficient manor.</p>
                            <button className="btn btn-primary"><a href="https://jm-note-taker-1.herokuapp.com/" target='_blank' rel="noreferrer">See Project</a></button>
                        </div>
                    </div>
                    <div className="card col-3 m-2">
                        <img className="card-img-top" src={Weather} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Simple weather application that will give the user the current conditions, and a 5-day forcast.</p>
                            <button className="btn btn-primary"><a href="https://jakemelville.github.io/weather-dashbord/" target='_blank' rel="noreferrer">See Project</a></button>
                        </div>
                    </div>
                    <div className="card col-3 m-2">
                        <img className="card-img-top" src={Scheduler} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Work-Day Scheduler</h5>
                            <p className="card-text">Designed to work as a daily calandar. Each time slot will change colors based on what time of the day it is. </p>
                            <button className="btn btn-primary"><a href="https://jakemelville.github.io/work-day-scheduler/" target='_blank' rel="noreferrer">See Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Apps;