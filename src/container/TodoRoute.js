import React, { Component } from 'react';
import Root from './Root';
import {BrowserRouter as Router , Route ,Link } from 'react-router-dom';

export default class TodoRoute extends React.Component {
    render() {
        return (
            <Router >
                <Route path ='/' component={Root} />
            </Router>   
        )
    }
}
