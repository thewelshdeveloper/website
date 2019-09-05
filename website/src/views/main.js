import React, { Component } from 'react'
import Menu from '../components/menu'
import Image from '../components/image'
import ImageWithSideText from '../components/imageWithSideText'

export default class main extends Component {
    render() {
        return (
            <React.Fragment>
            <Menu/>
            <Image src={'https://picsum.photos/2000/2000'} style={{ height: '100vh', minWidth: '100vw' }}/>
            
            <div className="ui container fluid">
               <ImageWithSideText imgSrc={'https://picsum.photos/400/400'} txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </div>
            </React.Fragment>
        )
    }
}
