import React from "react";
import profilePic from "../assets/profileimg.JPG"
import "../App.css";

const Home = (props) => {
    return (
        <main className="container-fluid d-flex">
            <div className="row pb-5">
                <h1 className="page-title col-lg-12 font-weight-bold">About</h1>
                <div className="col-md-12">
                    <div className="div-class float-left p-1 pt-2 pr-2"><img className="homeIMG img-fluid rounded" src={profilePic}
                        alt="Nikolas"></img></div>
                    <p className="pull-left pl-0 p-1 col-12 col-md-9">Full-stack web developer with a desire to apply my knowledge in Cognitive and Social Psychology to the burgeoning field of software development. Currently earning a certificate in full-stack development from the University of Utah, emphasizing skills in browser-based technologies, such as JavaScript and React.js, server-side development, object-oriented programming, and responsive web design. Self-reliant and effective at thinking abstractly and analytically while problem-solving. Detail-oriented, regardless of the complexity of the problem at hand. I spearheaded a team of four in developing a full-stack application aimed at assisting Autistic individuals in learning and interpreting facial cues and expressions. I am thrilled to utilize my coding abilities in collaborating to build purposeful web applications, while concurrently furthering my knowledge along the way.</p>
                    <p className="pull-left p-1 col-12 col-md-9">My Higher Education was acquired at the University of Utah,
                    where I recieved a Bachelors of Science degree in Psychology. While attending school I managed to
                    support myself through the illustrious job of antisocial bartender. Don't worry, the antisocial just
                    ads a layer of mystery.
                </p>
                    <div className="pull-left pl-0 p-1 col-9 col-md-6">
                        <div className="text-center rounded-0">
                            <ul className="social-icons">
                                <p className="social-links">
                                    <a href="mailto:nikolaslenning@gmail.com?subject = Feedback&body = Message">
                                        <i className="fas fa-envelope text-dark"></i>
                                    </a>
                                </p>
                                <p className="social-links">
                                    <a target="blank" href="https://github.com/nikolaslenning"><i
                                        className="fab fa-github text-dark"></i>
                                    </a>
                                </p>
                                <p className="social-links">
                                    <a target="blank" href="https://www.linkedin.com/in/nikolas-lenning-8908311b0/"><i
                                        className="fab fa-linkedin text-dark"></i>
                                    </a>
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Home; 