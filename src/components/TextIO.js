import React from 'react'
import TextInput from './TextInput'
import TextOutput from './TextOutput'
import { Row, Col } from 'reactstrap'

const TextIO = props => (
  <div className="textIO">
    <Row>
      <Col>
        <TextInput 
          inputValue={ props.textInput }
          handleChange={ props.handleChange }
          handleSubmit={ props.handleSubmit } />
      </Col>

      <Col>
        <TextOutput 
          MAXOutput={ props.MAXOutput } />
      </Col>
    </Row>
  </div>
)

export default TextIO
