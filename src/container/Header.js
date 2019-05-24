import React from 'react'
import {BrowserRouter as Router , Route ,Link } from 'react-router-dom';
export  const Header =(props) => {
    return(
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
            < Link to={"/home"} > <li className="list-group-item " >Home</li></ Link>
            < Link to={'/about'} > <li className="list-group-item ">About Us</li></ Link>
            < Link to={"/contact"} > <li className="list-group-item ">Contact</li></ Link>
            < Link to={"/message"} > <li className="list-group-item ">Message</li></ Link>
            </ul>
          </div>
        </nav>
    )
}
    
