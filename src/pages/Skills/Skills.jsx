import React from "react";
import "./Skills.css";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import htmlIMG from "../../assets/html5.png";
import cssIMG from "../../assets/css3.png";
import bootstrapIMG from "../../assets/bootstrap.png";
import jsIMG from "../../assets/js.png";
import jqueryIMG from "../../assets/jquery.png";
import nodeIMG from "../../assets/node.jpg";
import expressIMG from "../../assets/express.png";
import mysqlIMG from "../../assets/mysql.png";
import sequelizeIMG from "../../assets/sequelize.png";
import handlebarsIMG from "../../assets/handlebars.png";
import githubIMG from "../../assets/github.png";
import herokuIMG from "../../assets/heroku.png";
import mongoDBIMG from "../../assets/mongoDB.png";
import mongooseIMG from "../../assets/mongoose.jpg";
import reactIMG from "../../assets/react.png";
import reactBootstrapIMG from "../../assets/reactBootstrap.png";

const Skills = (props) => {    

    return (
        <form className="container-fluid w-75 pb-5">
          <PageTitle/>
        {/* <h1 className="page-title font-weight-bold">Skills</h1> */}
       
        <div className="skillsCard col-sm-4 card bg-light mb-3 card-border" >
            <h4 className="card-header">HTML</h4>
            <div className="row card-body">
              <div className="col-sm-4">
                <img id="html-img"alt="HTML5 logo" src={htmlIMG}></img>
                <p id="img-text" className="text-center">HTML5</p>
              </div>
              <div className="col-sm-4">
                <img id="html-img"alt="HTML5 logo" src={reactIMG}></img>
                <p id="img-text" className="text-center">JSX</p>
              </div>
              
            </div>
        </div>

        <div className="skillsCard col-sm-4 card bg-light mb-3 card-border" >
            <h4 className="card-header">CSS3</h4>
            <div className="row card-body">
              <div className="col-sm-4">
                <img id="html-img"alt="CSS3 logo" src={cssIMG}></img>
                <p id="img-text" className="text-center">CSS3</p>
              </div>
              <div className="col-sm-4">
                <img id="html-img"alt="CSS3 logo" src={bootstrapIMG}></img>
                <p id="img-text" className="text-center">Bootstrap</p>
              </div>              
              <div className="col-sm-4">
                <img id="html-img"alt="CSS3 logo" src={reactBootstrapIMG}></img>
                <p id="img-text" className="text-center">React-Bootstrap</p>
              </div>              
            </div>
        </div>

        <div className="skillsCard col-sm-4 card bg-light mb-3 card-border" >
            <h4 className="card-header">Javascript</h4>
            <div className="row card-body">
              <div className="col-sm-4" >
                <img id="html-img"alt="Node logo" src={reactIMG}></img>
                <p id="img-text" className="text-center">React</p>
              </div>              
              <div className="col-sm-4" >
                <img id="html-img"alt="Javascript logo" src={jsIMG}></img>
                <p id="img-text" className="text-center">Javascript</p>
              </div>
              <div className="col-sm-4" >
                <img id="html-img"alt="JQuery logo" src={jqueryIMG}></img>
                <p id="img-text" className="text-center">jQuery</p>
              </div>              
              <div className="col-sm-4" >
                <img id="html-img"alt="Node logo" src={nodeIMG}></img>
                <p id="img-text" className="text-center">Node</p>
              </div>              
            </div>
        </div>

        <div className="skillsCard col-sm-4 card bg-light mb-3 card-border" >
            <h4 className="card-header">Back-End</h4>
            <div className="row card-body">
              <div className="col-sm-4" >
                <img id="html-img"alt="Express.js logo" src={expressIMG}></img>
                <p id="img-text" className="text-center">Express.js</p>
              </div>
              <div className="col-sm-4" >
                <img id="html-img"alt="MySQL logo" src={mysqlIMG}></img>
                <p id="img-text" className="text-center">MySQL</p>
              </div>              
              <div className="col-sm-4" >
                <img id="html-img"alt="sequelize logo" src={sequelizeIMG}></img>
                <p id="img-text" className="text-center">Sequelize</p>
              </div>              
              <div className="col-sm-4" >
                <img id="html-img"alt="Handlebars logo" src={handlebarsIMG}></img>
                <p id="img-text" className="text-center">Handlebars</p>
              </div>              
              <div className="col-sm-4" >
                <img id="html-img"alt="mongoDB logo" src={mongoDBIMG}></img>
                <p id="img-text" className="text-center">mongoDB</p>
              </div>              
              <div className="col-sm-4" >
                <img id="html-img"alt="Mongoose logo" src={mongooseIMG}></img>
                <p id="img-text" className="text-center">Mongoose</p>
              </div>              
            </div>
        </div>

        <div className="skillsCard col-sm-4 card bg-light card-border mb-5" >
            <h4 className="card-header">Other</h4>
            <div className="row card-body">
              <div className="col-sm-4" >
                <img id="html-img"alt="GitHub logo" src={githubIMG}></img>
                <p id="img-text" className="text-center">GitHub</p>
              </div>
              <div className="col-sm-4" >
                <img id="html-img"alt="Heroku logo" src={herokuIMG}></img>
                <p id="img-text" className="text-center">Heroku</p>
              </div>              
                         
            </div>
        </div>


    </form>

    )
}

export default Skills; 