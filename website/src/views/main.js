import React, { Component } from 'react'
import Home from './home';
import About from './about';
import './main.scss';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Home/> 
                <About/>
            </React.Fragment>
        )
    }
}