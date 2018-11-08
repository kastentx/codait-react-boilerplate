import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import React from 'react'

const TextInput = props => (
  <div>
    <Row className="bottomRow">
      <Col>
        <Form
          method="post"
          onSubmit={ props.handleSubmit } >
          <FormGroup>
            <Row> 
              <Label for="inputField">Text Input</Label>
              <Input 
                type="textarea" 
                name="text" 
                id="inputField" 
                placeholder="enter your input here"
                value={ props.inputValue }
                onChange={ props.handleChange } />
            </Row>
            
            <Row>
              <Button type="submit">
                Submit
              </Button>
            </Row>
          </FormGroup>
        </Form>
      </Col>

    </Row>  
  </div>
)

export default TextInput
