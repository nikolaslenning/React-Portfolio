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

const Skills = (props) => {

    

    return (
        <form class="container-fluid w-75 pb-5">
          <PageTitle/>
        {/* <h1 class="page-title font-weight-bold">Skills</h1> */}
       
        <div class="skillsCard col-sm-4 card bg-light mb-3 card-border" >
            <h4 class="card-header">HTML</h4>
            <div class="card-body">
              <div>
                <img id="html-img"alt="HTML5 logo" src={htmlIMG}></img>
                <p id="img-text" class="text-center">HTML5</p>
              </div>
              
            </div>
        </div>

        <div class="skillsCard col-sm-4 card bg-light mb-3 card-border" >
            <h4 class="card-header">CSS</h4>
            <div class="row card-body">
              <div class="col-sm-4">
                <img id="html-img"alt="CSS3 logo" src={cssIMG}></img>
                <p id="img-text" class="text-center">CSS3</p>
              </div>
              <div class="col-sm-4">
                <img id="html-img"alt="CSS3 logo" src={bootstrapIMG}></img>
                <p id="img-text" class="text-center">Bootstrap</p>
              </div>              
            </div>
        </div>

        <div class="skillsCard col-sm-4 card bg-light mb-3 card-border" >
            <h4 class="card-header">Javascript</h4>
            <div class="row card-body">
              <div class="col-sm-4" >
                <img id="html-img"alt="Javascript logo" src={jsIMG}></img>
                <p id="img-text" class="text-center">Javascript</p>
              </div>
              <div class="col-sm-4" >
                <img id="html-img"alt="JQuery logo" src={jqueryIMG}></img>
                <p id="img-text" class="text-center">jQuery</p>
              </div>              
              <div class="col-sm-4" >
                <img id="html-img"alt="Node logo" src={nodeIMG}></img>
                <p id="img-text" class="text-center">Node</p>
              </div>              
            </div>
        </div>

        <div class="skillsCard col-sm-4 card bg-light mb-3 card-border" >
            <h4 class="card-header">Back-End</h4>
            <div class="row card-body">
              <div class="col-sm-4" >
                <img id="html-img"alt="Express.js logo" src={expressIMG}></img>
                <p id="img-text" class="text-center">Express.js</p>
              </div>
              <div class="col-sm-4" >
                <img id="html-img"alt="MySQL logo" src={mysqlIMG}></img>
                <p id="img-text" class="text-center">MySQL</p>
              </div>              
              <div class="col-sm-4" >
                <img id="html-img"alt="sequelize logo" src={sequelizeIMG}></img>
                <p id="img-text" class="text-center">Sequelize</p>
              </div>              
              <div class="col-sm-4" >
                <img id="html-img"alt="Handlebars logo" src={handlebarsIMG}></img>
                <p id="img-text" class="text-center">Handlebars</p>
              </div>              
            </div>
        </div>

        <div class="skillsCard col-sm-4 card bg-light card-border mb-5" >
            <h4 class="card-header">Other</h4>
            <div class="row card-body">
              <div class="col-sm-4" >
                <img id="html-img"alt="GitHub logo" src={githubIMG}></img>
                <p id="img-text" class="text-center">GitHub</p>
              </div>
              <div class="col-sm-4" >
                <img id="html-img"alt="Heroku logo" src={herokuIMG}></img>
                <p id="img-text" class="text-center">Heroku</p>
              </div>              
                         
            </div>
        </div>


    </form>

    )
}

export default Skills; 