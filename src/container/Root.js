import React, { Component } from 'react';
import {Header} from './Header';
import Home from './Home';  
import Contact from './Contact';
import Message from './Message';
import AboutUs from './AboutUs';
import {BrowserRouter as Router , Route ,Link} from 'react-router-dom';

export default class Root extends React.Component {
    render() {
        return (
            <div className ="container">
                <div className ="row">                  
                       <Header />              
                </div>
                <div className ="row">
                    <div className ="col-xs-10 col-xs-offset-1">
                        <Route path ='/contact' component={Contact} />
                        <Route path ='/message' component={Message} />
                        <Route path ='/home' component={Home} />
                        <Route path ='/about' component={AboutUs} /> 
                    </div>              
                </div>  
            </div> 
        )
    }
}
