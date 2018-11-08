import React, { Component } from 'react'
import ModelData from './components/ModelData'
import LogoImage from './components/LogoImage'
import TextIO from './components/TextIO'
import ImageIO from './components/ImageIO'
import RawOutput from './components/RawOutput'
import { predict, imagePredict, cleanMAXResponse, modelCheck } from './utils'
import './App.css'

/* specify path to logo image here */
import codaitLogo from './codait-logo.png'

/* specify localhost port for MAX Model here */
const MAX_MODEL_PORT = 5000

/* specify maximum input image size here (for scaling) */
const IMAGE_SIZE = 513

const initialState = {
  imageInput: '',
  textInput: ''
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
    const response = await predict(this.state.textInput)
    this.setState({
      ...initialState,
      MAXOutput: response
    })
  }

  handleImageSubmit = async (imageBlob) => {
    const response = await imagePredict(imageBlob)
    this.setState({
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

        <ImageIO
          imageSize={ IMAGE_SIZE }
          imagePreview={ this.state.imageInput }
          handleSubmit={ this.handleImageSubmit }
          setImageInput={ newImage =>
            this.setState({ 
              imageInput: newImage,
              MAXOutput: ''
            })
          } />

        <TextIO 
          inputValue={ this.state.textInput }
          MAXOutput={ this.state.MAXOutput ? cleanMAXResponse(this.state.MAXOutput) : null }
          handleChange={ this.handleTextChange }
          handleSubmit={ this.handleTextSubmit } />

        <RawOutput data={ this.state.MAXOutput }/>

      </div>
    )
  }
}

export default App
