import React from 'react'
import { Image as SemanticImage } from 'semantic-ui-react'

const Image = (props) => (
  <SemanticImage src={props.src} style={props.style} />
)
export default Image