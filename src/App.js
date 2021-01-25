import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills"
import Portfolio from "./pages/Portfolio/Portfolio"
import './App.css';

function App() {

  return (
    <div >      
   
        <Header />
        
        <Switch>
          <Route exact path="/about" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Redirect from="*" to="/about" />
        </Switch>

        <Footer />
      {/* </Router> */}
    </div>
  );
}
export default App;
