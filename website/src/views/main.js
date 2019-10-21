import React, { Component } from 'react'
import {Header} from 'semantic-ui-react'
import Menu from '../components/menu'
import Image from '../components/image'
import ImageWithSideText from '../components/imageWithSideText'
import Logo from '../background1.jpg';

export default class main extends Component {
    

    render() {
        return (
            <React.Fragment>
            <Menu/>
            <div className="ui fluid image">
                <Image src={Logo} style={{ height: '100vh', minWidth: '100vw' }}/>
                <div style={{
                    position: 'absolute',  
                top:'45%', 
                textAlign:'center', 
                color:'white', 
                width: '100%', 
                height: 'auto',
                fontSize:'5em',
                lineHeight:'1em',
                fontWeight:'bold'
                }}>Kyle Thomas<br/> <span style={{fontSize:'0.5em'}}>Senior Developer</span></div>
            </div>
            
            
            <div className="ui container fluid">
            <Header as='h2' style={{fontSize:'3em', padding:'1em'}} textAlign={"center"}>Second Header</Header>
               <ImageWithSideText imgSrc={'https://picsum.photos/400/400'} txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </div>
            </React.Fragment>
        )
    }
}
