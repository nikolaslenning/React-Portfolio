import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Portfolio from "./pages/Portfolio"

import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Header />        
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
