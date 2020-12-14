import React from "react";
import "./Portfolio.css"
import emotePic from "../../assets/emote.png"

const Portfolio = (props) => {
    return (
        // <!--Grid layout Bootstrap CSS Placeholder Images -->
        <section className="container-fluid d-block justify-content-start">
            <div className="row pb-2">
                <h1 className="col-lg-12 page-title pt-5">Portfolio</h1>
            </div>

            <div className="row justify-content-between">

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
            </div>

        </section>


    )
}

export default Portfolio; 