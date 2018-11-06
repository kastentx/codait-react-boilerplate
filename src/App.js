import React, { Component } from 'react';
import logo from './codait-logo.png';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import './App.css';

class App extends Component {
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
              <Row>
                <Form>
                  <FormGroup>
                    <Label for="inputField">Text Input</Label>
                    <Input type="textarea" name="text" id="inputField" />
                  </FormGroup>
                </Form>
                </Row>
                
                <Row>
                  <Button>
                    Submit
                  </Button>
                </Row>
            </Col>

            <Col>
              <Form>
                <FormGroup>
                  <Label for="outputArea">Model Output</Label>
                  <Input type="textarea" name="text" id="outputArea" value="Sample Response" />
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
