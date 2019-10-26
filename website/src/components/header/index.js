import React, { Component } from 'react';
import Logo from '../../assets/png/logo.png';
import './index.scss';

export default class Header extends Component {
 state={
    navOpen: false
 }

 toggleNavigation = () => {
     this.setState(prevState => ({
        navOpen: !prevState.navOpen
    }));
 }

 closeModal = () => {
     const {navOpen} = this.state;

     if(navOpen) {
         this.setState({navOpen: false})
     }
 }
    render() {
        const{navOpen} = this.state;
        return (
            <header className='header'>
                <div className='header-left'>
                    <img className='logo' src={Logo} alt='Site logo - Icon of a welsh dragon'/>
                    <span className='logo-name'>TWD</span>
                </div>
                <div className='header-center'>
                    <div className={`nav-container ${navOpen ? "open" : "closed"}`}>
                        <nav className='nav'>
                            <a onClick={this.closeModal} href='#home'>HOME</a>
                            <a onClick={this.closeModal} href='#about'>ABOUT ME</a>
                            <a onClick={this.closeModal} href='#projects'>PROJECTS</a>
                        </nav>
                    </div>
                </div>
                <div className='header-right'>
                    <i className={`icon icon-${navOpen ? 'cross' : 'hamburger'}`} alt='Mobile menu icon - 3 lines' onClick={this.toggleNavigation}/>
                </div>
            </header>
        )
    }
}
