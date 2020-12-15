import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Portfolio.css"
import emotePic from "../../assets/emote.png"
import budgetPic from "../../assets/budgetTracker.png"
import workoutPic from "../../assets/workoutTracker.png"
import whatNextPic from "../../assets/whatnextscreenshot.png"
import { Card, Footer } from "react-bootstrap";

const Portfolio = (props) => {

    var style = {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    };

    // const [isFlipped, setIsFlipped] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const [isFlipped2, setIsFlipped2] = useState(false)
    const [isFlipped3, setIsFlipped3] = useState(false)
    const [isFlipped4, setIsFlipped4] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()
        setIsFlipped(!isFlipped)
    }
    const handleClick2 = (event) => {
        event.preventDefault()
        setIsFlipped2(!isFlipped2)
    }
    const handleClick3 = (event) => {
        event.preventDefault()
        setIsFlipped3(!isFlipped3)
    }
    const handleClick4 = (event) => {
        event.preventDefault()
        setIsFlipped4(!isFlipped4)
    }

    return (

        //<!--Grid layout Bootstrap CSS Placeholder Images -->
        <section className="container-fluid d-block justify-content-start">
            {/* <div className="row pb-2">
                <h1 className="col-lg-12 page-title pt-5">Portfolio</h1>
            </div> */}
            <div className="row justify-content-between">

                <div className="scene col-12 col-md-6 col-lg-4">
                    {/* <div className="card card-border"> */}
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div className="card card-border" onClick={handleClick}>
                            <div className="card-body card__face card__face--front">
                                <img className="card-img border border-light" //style="max-width: 600px; max-height: 300px;"
                                    src={emotePic} alt="Emote app screenshot"></img>

                                <h4 className="pt-2 font-weight-bold">Emote</h4>
                                <p className="card-text">Heroku web app that returns numerical data identifying the socially-perceived emotions found within the image. This data response can assist users with Autism Spectrum Disorder to better understand and interpret facial emotions.</p>
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>
                        </div>

                        <div className="card sceneBack card-border" onClick={handleClick}>
                            <h4 className="p-2">Accomplishments</h4>
                            <ul>
                                <li>Built with Node.js back-end</li>
                                <li>Express web framework to structure and organize app</li>
                                <li>MySQL backed Database with a Sequelize ORM</li>
                                <li>Utilized Handlebars template engine</li>
                                <li>Integrated Imgur and Microsoft Face API</li>
                                <li>Model-View-Controller design pattern</li>
                                <li>Bootstrap CSS front-end</li>

                            </ul>
                            <Card.Footer style={style} className="card-links fixed-bottom cardfooter ">
                                <a className="btn btn-floating rounded-circle btn-large waves-effect waves-light "
                                    href="https://intense-chamber-80785.herokuapp.com" target="_blank"><i
                                        className="fas fa-external-link-alt"></i></a>
                                <a className="btn btn-floating rounded-circle btn-large waves-effect waves-light "
                                    href="https://github.com/nikolaslenning/Grocery-Guys" target="_blank"><i
                                        className="fab fa-github"></i></a>
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </Card.Footer>
                        </div>
                    </ReactCardFlip>
                </div>

                <div className="scene col-12 col-md-6 col-lg-4">
                    {/* <div className="card card-border"> */}
                    <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                        <div className="card card-border" onClick={handleClick2}>
                            <div className="card-body card__face card__face--front">
                                <img className="card-img border border-light" //style="max-width: 600px; max-height: 300px;"
                                    src={budgetPic} alt="Budget Anytime app screenshot"></img>

                                <h4 class="pt-2 font-weight-bold">Budget Anytime</h4>
                                <p class="card-text">Progressive Web App where I have added offline access and functionality. The user will be able to add expenses and deposits to their budget with or without an internet connection.</p>
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>
                        </div>

                        <div className="card sceneBack card-border" onClick={handleClick2}>
                            <h4 className="p-2">Accomplishments</h4>
                            <ul>
                                <li>Downloadable progressive web application</li>
                                <li>Built with Node.js back-end</li>
                                <li>Express web framework to structure and organize app</li>
                                <li>Model-View-Controller design pattern</li>
                            </ul>
                            <Card.Footer style={style} className=" cardfooter">
                                <a className="btn btn-floating rounded-circle btn-large waves-effect waves-light "
                                    href="https://sheltered-river-76743.herokuapp.com/" target="_blank"><i
                                        className="fas fa-external-link-alt"></i></a>
                                <a className="btn btn-floating rounded-circle btn-large waves-effect waves-light "
                                    href="https://github.com/nikolaslenning/Budget-Anytime-PWA" target="_blank"><i
                                        className="fab fa-github"></i></a>
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </Card.Footer>
                        </div>
                    </ReactCardFlip>
                </div>

                <div className="scene col-12 col-md-6 col-lg-4">
                    {/* <div className="card card-border"> */}
                    <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
                        <div className="card card-border" onClick={handleClick3}>
                            <div className="card-body card__face card__face--front">
                                <img className="card-img border border-light" //style="max-width: 600px; max-height: 300px;"
                                    src={workoutPic} alt="Workout Tracker app screenshot"></img>

                                <h4 class="pt-2 font-weight-bold">Workout Tracker</h4>
                                <p class="card-text">Heroku web app that can be used to view, create, and track daily workouts stored for later in a database. </p>
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>
                        </div>

                        <div className="card sceneBack card-border" onClick={handleClick3}>
                            <h4 className="p-2">Accomplishments</h4>
                            <ul>
                                <li>Built with Node.js back-end</li>
                                <li>Express web framework to structure and organize app</li>
                                <li>Database managed using MySQL</li>
                                <li>Utilized Handlebars template engine</li>
                                <li>Model-View-Controller design pattern</li>
                                <li>Bootstrap CSS front-end</li>

                            </ul>
                            <Card.Footer style={style} className=" cardfooter">
                                <a class="btn btn-floating rounded-circle btn-large waves-effect waves-light "
                                    href="https://nameless-springs-49152.herokuapp.com/" target="_blank"><i
                                        class="fas fa-external-link-alt"></i></a>
                                <a class="btn btn-floating rounded-circle btn-large waves-effect waves-light "
                                    href="https://github.com/nikolaslenning/Workout-Tracker" target="_blank"><i
                                        class="fab fa-github"></i></a>
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </Card.Footer>
                        </div>
                    </ReactCardFlip>
                </div>

                <div className="scene col-12 col-md-6 col-lg-4">
                    {/* <div className="card card-border"> */}
                    <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
                        <div className="card card-border" onClick={handleClick4}>
                            <div className="card-body card__face card__face--front">
                                <img className="card-img border border-light" //style="max-width: 600px; max-height: 300px;"
                                    src={whatNextPic} alt="WhatsNext app screenshot"></img>

                                <h4 class="pt-2 font-weight-bold">WhatNext</h4>
                                <p class="card-text">Web app where users can explore and save incoming and outgoing Netflix
                            titles based on date.</p>
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>
                        </div>

                        <div className="card sceneBack card-border" onClick={handleClick4}>
                            <h4 className="p-2">Accomplishments</h4>
                            <ul>
                                <li>Built with jQuery back-end</li>
                                <li>UIKit CSS front-end</li>
                                <li>Client-side rendering (AJAX)</li>
                                <li>Integrated uNoGs & OMDBi APIs</li>
                            </ul>
                            <Card.Footer style={style} className=" cardfooter">
                                <a class="btn btn-floating rounded-circle btn-large card-links"
                                    href="https://nikolaslenning.github.io/WhatsNext/" target="_blank"><i
                                        class="fas fa-external-link-alt"></i></a>
                                <a class="btn btn-floating rounded-circle btn-large card-links"
                                    href="https://github.com/nikolaslenning/WhatsNext" target="_blank"><i
                                        class="fab fa-github"></i></a>
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </Card.Footer>
                        </div>
                    </ReactCardFlip>
                </div>


            </div>




            {/* </div> */}


            {/* <div className="row justify-content-between">

                <div className="scene col-12 col-md-6 col-lg-4">
                    <div className="card card-border">
                        <div className="card-body card__face card__face--front">
                            <img className="card-img border border-light" //style="max-width: 600px; max-height: 300px;"
                                src={emotePic} alt="Emote app screenshot"></img>

                            <h4 className="pt-2 font-weight-bold">Emote</h4>
                            <p className="card-text">Heroku web app that returns numerical data identifying the socially-perceived emotions found within the image. This data response can assist users with Autism Spectrum Disorder to better understand and interpret facial emotions.</p>
                        </div>

                        <div className="card__face card__face--back">
                            <h4 className="p-2">Accomplishments</h4>
                            <ul>
                                <li>Built with Node.js back-end</li>
                                <li>Express web framework to structure and organize app</li>
                                <li>MySQL backed Database with a Sequelize ORM</li>
                                <li>Utilized Handlebars template engine</li>
                                <li>Integrated Imgur and Microsoft Face API</li>
                                <li>Model-View-Controller design pattern</li>
                                <li>Bootstrap CSS front-end</li>

                            </ul>
                            <div className="card-links card-footer fixed-bottom">
                                <a className="btn btn-floating rounded-circle btn-large waves-effect waves-light "
                                    href="https://intense-chamber-80785.herokuapp.com" target="_blank"><i
                                        className="fas fa-external-link-alt"></i></a>
                                <a className="btn btn-floating rounded-circle btn-large waves-effect waves-light "
                                    href="https://github.com/nikolaslenning/Grocery-Guys" target="_blank"><i
                                        className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>


    )
}

export default Portfolio; 