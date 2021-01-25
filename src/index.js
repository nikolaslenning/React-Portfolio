import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import MenuProvider from "react-flexible-sliding-menu";
import NavMenu from "./components/NavMenu/NavMenu";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <MenuProvider MenuComponent={NavMenu} animation="slide" direction="right">
      <App />
    </MenuProvider>
  </BrowserRouter>,
  document.getElementById('root')
);