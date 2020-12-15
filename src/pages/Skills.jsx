import React from "react";

const Skills = (props) => {

    

    return (
        <form class="container-fluid w-75">
        <h1 class="page-title font-weight-bold">Skills</h1>
       
        <div class="col-sm-4 card bg-light mb-3 card-border" >
            <h4 class="card-header">HTML</h4>
            <div class="card-body">
              <div>
                <img id="html-img"alt="HTML5 logo" src="images/html5.png"></img>
                <p id="img-text" class="text-center">HTML5</p>
              </div>
              
            </div>
        </div>

        <div class="col-sm-4 card bg-light mb-3 card-border" >
            <h4 class="card-header">CSS</h4>
            <div class="row card-body">
              <div class="col-sm-4">
                <img id="html-img"alt="CSS3 logo" src="images/css3.png"></img>
                <p id="img-text" class="text-center">CSS3</p>
              </div>
              <div class="col-sm-4">
                <img id="html-img"alt="CSS3 logo" src="images/bootstrap.png"></img>
                <p id="img-text" class="text-center">Bootstrap</p>
              </div>              
            </div>
        </div>

        <div class="col-sm-4 card bg-light mb-3 card-border" >
            <h4 class="card-header">Javascript</h4>
            <div class="row card-body">
              <div class="col-sm-4" >
                <img id="html-img"alt="Javascript logo" src="images/js.png"></img>
                <p id="img-text" class="text-center">Javascript</p>
              </div>
              <div class="col-sm-4" >
                <img id="html-img"alt="JQuery logo" src="images/jquery.png"></img>
                <p id="img-text" class="text-center">jQuery</p>
              </div>              
              <div class="col-sm-4" >
                <img id="html-img"alt="Node logo" src="images/node.jpg"></img>
                <p id="img-text" class="text-center">Node</p>
              </div>              
            </div>
        </div>

        <div class="col-sm-4 card bg-light mb-3 card-border" >
            <h4 class="card-header">Back-End</h4>
            <div class="row card-body">
              <div class="col-sm-4" >
                <img id="html-img"alt="Express.js logo" src="images/express.png"></img>
                <p id="img-text" class="text-center">Express.js</p>
              </div>
              <div class="col-sm-4" >
                <img id="html-img"alt="MySQL logo" src="images/mysql.png"></img>
                <p id="img-text" class="text-center">MySQL</p>
              </div>              
              <div class="col-sm-4" >
                <img id="html-img"alt="MySQL logo" src="images/sequelize.png"></img>
                <p id="img-text" class="text-center">Sequelize</p>
              </div>              
              <div class="col-sm-4" >
                <img id="html-img"alt="Handlebars logo" src="images/handlebars.png"></img>
                <p id="img-text" class="text-center">Handlebars</p>
              </div>              
            </div>
        </div>

        <div class="col-sm-4 card bg-light mb-3 card-border mb-5" >
            <h4 class="card-header">Other</h4>
            <div class="row card-body">
              <div class="col-sm-4" >
                <img id="html-img"alt="GitHub logo" src="images/github.png"></img>
                <p id="img-text" class="text-center">GitHub</p>
              </div>
              <div class="col-sm-4" >
                <img id="html-img"alt="Heroku logo" src="images/heroku.png"></img>
                <p id="img-text" class="text-center">Heroku</p>
              </div>              
                         
            </div>
        </div>


    </form>

    )
}

export default Skills; 