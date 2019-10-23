import React, { Component } from 'react'
import Header from '../components/header';
import './main.scss';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className='wrapper'>
                <p className='text'>The Welsh Developer</p>
                    <p className='text-left'>The Welsh Developer</p>

            </div>
            </React.Fragment>
        )
    }
}
