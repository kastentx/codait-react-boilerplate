import React from 'react'
import { Col, Form, FormGroup, Input, Label } from 'reactstrap'

const TextOutput = props => (
  <Col>
    <Form>
      <FormGroup>
        <Label for="outputArea">Model Output</Label>
        <Input 
          type="textarea" 
          name="text" 
          id="outputArea" 
          value={ props.MAXOutput ? JSON.stringify(props.MAXOutput) : '' }
          readOnly />
      </FormGroup>
    </Form>
  </Col>
)

export default TextOutput
