import React from 'react'
import TextInput from './TextInput'
import TextOutput from './TextOutput'
import { Row, Col, Card } from 'reactstrap'

const textAreaStyle = {
  height: `25vh !important`,
  width: `25vw !important`,
  margin: `auto !important`
}

const TextIO = props => (
  <div className="textIO">
    <Card style={ { backgroundColor: '#2f2d2e', padding: '2%' } }>
      <Row>
        <Col>
          <TextInput
            style={ textAreaStyle } 
            inputValue={ props.textInput }
            handleChange={ props.handleChange }
            handleSubmit={ props.handleSubmit } />
        </Col>

        <Col>
          <TextOutput 
            style = { { ...textAreaStyle, cursor: 'default' } }
            MAXOutput={ props.MAXOutput } />
        </Col>
      </Row>
    </Card>
  </div>
)

export default TextIO
