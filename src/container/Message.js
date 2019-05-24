import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router , Route ,Link } from 'react-router-dom';
import ViewMessage from './ViewMessage'
export default class Message extends Component {
    render() {
        return (
            <Fragment>
                <Router>
            <div>
                    <Link to={'/message/1'} ><li className="list-group-item ">Message1</li></Link>
                    <Link to={'/message/2'} ><li className="list-group-item ">Message2</li></Link>
                    <Link to={'/message/3'} ><li className="list-group-item ">Message3</li></Link>
                    <Link to={'/message/4'} ><li className="list-group-item ">Message4</li></Link>
                    
            </div>
            <Route exact path='/message/:id' component={ViewMessage} />
        
            </Router>
            </Fragment>
        ) 
    }
}