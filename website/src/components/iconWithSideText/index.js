import React, { Component } from 'react'
import './index.scss';

export default class IconWithSideText extends Component {
    render() {
        const {imageSrc, text} = this.props
        return (
            <div className="icon-text-container">
                <div className="inner-container">
                  <img src={imageSrc} alt=""/>
                    <p>{text}</p>
                </div>
                <hr/>
            </div>
        )
    }
}
