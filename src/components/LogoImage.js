import React from 'react'
import { Row } from 'reactstrap'

const LogoImage = props => (
  <Row className="topRow">
      <img src={ props.image } className="App-logo" alt="logo" />
  </Row>
)

export default LogoImage
