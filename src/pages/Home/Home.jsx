import React from "react";
import profilePic from "../../assets/profileimg.JPG"
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import "./Home.css";

const Home = (props) => {
    return (
        <main className="container-fluid justify-content-start d-block">
            <div className="row pl-3 pb-5 mr-1">
                {/* <h1 className="page-title col-lg-12 font-weight-bold">About</h1> */}
                <PageTitle />
                <div className="about mb-4 col-lg-9 col-md-11 col-sm-10">
                    <div className="profileIMG float-left p-1 pt-2 pr-2"><img className="homeIMG img-fluid rounded" src={profilePic}
                        alt="Nikolas"></img></div>
                    <p className="pull-left pl-0 p-1 ">Full-stack web developer with a desire to apply my knowledge in Cognitive and Social Psychology to the burgeoning field of software development. Currently earning a certificate in full-stack development from the University of Utah, emphasizing skills in browser-based technologies, such as JavaScript and React.js, server-side development, object-oriented programming, and responsive web design. Self-reliant and effective at thinking abstractly and analytically while problem-solving. Detail-oriented, regardless of the complexity of the problem at hand. I spearheaded a team of four in developing a full-stack application aimed at assisting Autistic individuals in learning and interpreting facial cues and expressions. I am thrilled to utilize my coding abilities in collaborating to build purposeful web applications, while concurrently furthering my knowledge along the way.</p>
                    <p className="pull-left p-1 ">My Higher Education was acquired at the University of Utah,
                    where I recieved a Bachelors of Science degree in Psychology as well as a certificate in Full-Stack web development. While attending school I managed to support myself through the illustrious job of bartender, so you know I can mix you up a drink when the workday ends! And when not in the pursuit of knowledge I find myself looking for any excuse to do something bike related. Generally, I'm drawn to the call of the dirt jumps, but I don't discrimate against classic road cycling or anything motor driven. 
                </p>
                    
                </div>
            </div>
        </main >
    )
}

export default Home; 