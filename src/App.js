import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import PageTitle from "./components/PageTitle/PageTitle"
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills"
import Portfolio from "./pages/Portfolio/Portfolio"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <PageTitle /> */}
        <Switch>
          <Route exact path="/about" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Redirect from ="*" to="/about" />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
export default App;
