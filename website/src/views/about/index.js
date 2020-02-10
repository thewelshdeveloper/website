import React, { Component } from 'react'
import './index.scss';
import Heading from '../../components/heading';
import IconWithSideText from '../../components/iconWithSideText';
import LeadershipIcon from '../../assets/svg/leadership.svg';
import CompanyIcon from '../../assets/svg/company.svg';

export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <Heading heading="About"/>
                <IconWithSideText
                    imageSrc={LeadershipIcon}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                <IconWithSideText
                    imageSrc={CompanyIcon}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}/>
            </div>
        )
    }
}
