import React, { Component } from 'react'
import ModelData from './components/ModelData'
import LogoImage from './components/LogoImage'
import TextInput from './components/TextInput'
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

        <LogoImage />

        <ModelData modelType={ this.state.modelType } />

        <TextInput 
          inputValue={ this.state.textInput }
          MAXOutput={ this.state.MAXOutput }
          handleChange={ this.handleTextChange }
          handleSubmit={ this.handleTextSubmit } 
        />

      </div>
    )
  }
}

export default App
