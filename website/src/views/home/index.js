import React, { Component } from 'react'
import Header from '../../components/header'
import Wave from '../../assets/svg/wave.svg'
import './index.scss'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='background-top'>
                    <img className='wave' src={Wave}/>
                </div>
                <div className='background-bottom'></div>
                <Header/>
            </div>
        )
    }
}
