import React, { Component } from 'react';
import Logo from '../../assets/png/logo.png';
import MenuBurger from '../../assets/svg/menu-burger.svg';
import './index.scss';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header-left'>
                    <img className='logo' src={Logo} alt='Site logo - Icon of a welsh dragon'/>
                    <span className='logo-name'>TWD</span>
                </div>
                <div className='header-center'>
                <nav className='nav'>
                        <a href='#home'>About</a>
                        <a href='#home'>Sometext</a>
                        <a href='#home'>Another text</a>
                    </nav>
                </div>
                <div className='header-right'>
                    <img className='menu-burger' src={MenuBurger} alt='Mobile menu icon - 3 lines'/>
                </div>
            </header>
        )
    }
}
