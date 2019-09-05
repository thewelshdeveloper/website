import React from 'react'
import {Grid, Image} from 'semantic-ui-react'

export default function imageWithSideText(props) {
    return (
             <Grid centered padded stackable={true}>
                <Grid.Column verticalAlign='middle' width={5}>
                    <Image circular style={{padding:'20px'}} centered src={props.imgSrc} />
                </Grid.Column>
                <Grid.Column textAlign='left' verticalAlign='middle' width={11}>
                    <p style={{fontSize:'2em',padding:'0 15% 0 0'}}>{props.txt}</p>
                </Grid.Column>
            </Grid>
    )
}
