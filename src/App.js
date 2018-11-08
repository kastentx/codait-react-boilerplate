import React, { Component } from 'react'
import ModelData from './components/ModelData'
import LogoImage from './components/LogoImage'
import TextIO from './components/TextIO'
import { predict, cleanMAXResponse, modelCheck } from './utils'
import './App.css'

/* specify path to logo image here */
import codaitLogo from './codait-logo.png'

/* specify localhost port for MAX Model here */
const MAX_MODEL_PORT = 5000

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

  handleTextChange = e => {
    this.setState({
      textInput: e.target.value
    })
  }

  handleTextSubmit = async e => {
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
      <div className="App-content">

        <LogoImage 
          image={ codaitLogo }/>

        <ModelData 
          modelType={ this.state.modelType } 
          modelPort={ MAX_MODEL_PORT } />
        
        <TextIO 
          inputValue={ this.state.textInput }
          MAXOutput={ this.state.MAXOutput }
          handleChange={ this.handleTextChange }
          handleSubmit={ this.handleTextSubmit } />

        <code>
          { JSON.stringify(this.state.MAXOutput) }
        </code>

      </div>
    )
  }
}

export default App
