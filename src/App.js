import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, NavbarBrand} from 'reactstrap'
import { directive } from '@babel/types';

function App() {
  return (
    <div className="App">
    <Navbar dark color="dark" className="navbar-expand-sm fixed-top">
      <div className="container">
        <NavbarBrand href="/">Tesla Engineering</NavbarBrand>
       
        <button
          className="navbar-toggler "
          type="button "
          data-toggle="collapse"
          data-target="#Nav1"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="Nav1">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Clients</a>
                </li>
            </ul>
           
            </div>
      </div>
    </Navbar>
  </div>
    
  );
}

export default App;
