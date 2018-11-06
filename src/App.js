import React, { Component } from 'react'
import logo from './codait-logo.png'
import { Row, Col, Form, FormGroup, Input, Label, Button, FormText } from 'reactstrap'
import { predict, cleanMAXResponse, modelCheck } from './utils'
import './App.css'

const initialState = {
  textInput: '',
  MAXOutput: ''
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  componentDidMount = async () => {
    const { data } = await modelCheck()
    this.setState({
      modelType: data
    })
  }

  handleChange = e => {
    this.setState({
      textInput: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const response = cleanMAXResponse(await predict(this.state.textInput))
    console.log(response)
    this.setState({
      ...initialState,
      MAXOutput: response
    })
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
            { this.state.modelType ? this.state.modelType.name : null }
          </Row>
          <Row>
              <FormText>{ this.state.modelType ? this.state.modelType.description : null }</FormText>
          </Row>

          <Row className="bottomRow">
            <Col>
              <Form
                method="post"
                onSubmit={ this.handleSubmit } 
              >
                <FormGroup>
                  <Row> 
                    <Label for="inputField">Text Input</Label>
                    <Input 
                      type="textarea" 
                      name="text" 
                      id="inputField" 
                      placeholder="enter your input here"
                      value={ this.state.textInput }
                      onChange={ this.handleChange } />
                  </Row>
                  
                  <Row>
                    <Button type="submit">
                      Submit
                    </Button>
                  </Row>
                </FormGroup>
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
                    value={ this.state.MAXOutput ? JSON.stringify(this.state.MAXOutput) : '' }
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
