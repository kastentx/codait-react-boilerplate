import React, { Component } from 'react'
import logo from './codait-logo.png'
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { predict } from './utils'
import './App.css'

const initialState = {
  inputText: '',
  modelResponse: ''
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  handleChange = e => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log(this.state.inputText)
    const response = await predict(this.state.inputText)
    console.log(response)
    this.setState(initialState)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Row className="topRow">
            <Col>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>

          <Row className="midRow">
            <Col>
              <Form
                method="post"
                onSubmit={ this.handleSubmit } 
              >
              <Row> 
                <FormGroup>
                  <Label for="inputField">Text Input</Label>
                  <Input 
                    type="textarea" 
                    name="text" 
                    id="inputField" 
                    placeholder="enter your input here"
                    value={ this.state.inputText }
                    onChange={ this.handleChange } />
                </FormGroup>
                </Row>
                
                <Row>
                  <Button type="submit">
                    Submit
                  </Button>
                </Row>
              </Form>
            </Col>

            <Col>
              <Form>
                <FormGroup>
                  <Label for="outputArea">Model Output</Label>
                  <Input 
                    type="textarea" 
                    name="text" 
                    id="outputArea" 
                    defaultValue="Sample Response" 
                    readOnly />
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default App;
