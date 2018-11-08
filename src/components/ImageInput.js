import { Row, Col, Form, Input, Card } from 'reactstrap'

import { getScaledSize } from '../utils'
import React, { Component } from 'react'

export default class ImageInput extends Component {
  constructor(props) {
    super(props)
    this.uploadRef = React.createRef()
    this.canvasRef = React.createRef()
  }

  receiveUpload = fileObj => {
    if (fileObj) {
      const imageURL = window.URL.createObjectURL(fileObj)
      const canvas = this.canvasRef.current
      const ctx = canvas.getContext('2d')  
      let scaledImage = new Image()
      scaledImage.onload = async () => {
        const { scaledWidth, scaledHeight } = getScaledSize({
          height: scaledImage.naturalHeight, 
          width: scaledImage.naturalWidth,
          imageSize: this.props.imageSize
        })
        scaledImage.width = scaledWidth
        scaledImage.height = scaledHeight
        canvas.width = scaledWidth 
        canvas.height = scaledHeight
        ctx.drawImage(scaledImage, 0, 0, scaledWidth, scaledHeight)
        const newImage = {
          name: fileObj.name,
          type: fileObj.type,
          height: scaledHeight,
          width: scaledWidth,
          source: canvas.toDataURL() 
        }
        this.props.renderImagePreview(newImage)
      }
      scaledImage.src = imageURL
    }
  }

  handleFileChange = files => {
    if (files[0]) {
      this.receiveUpload(files[0])
      this.props.handleSubmit(files[0])
    }
  }

  render() {
    return (
      <div className="imageInput">
      <Card style={ { backgroundColor: '#2f2d2e', padding: '2%' } }>
        <h3>
          { `Upload an image to be processed:` }
        </h3>  
        <div className="formWrapper">
          <Form 
            method="post" 
            encType="multipart/form-data" >
            <label className="pickerLabel" htmlFor="filePicker">
              <span className="btn btn-primary formBtn filePickerBtn">
                Select Image
              </span>
            </label>
            <Input 
              style={ { display: 'none' } }
              id="filePicker" 
              ref={ this.uploadRef }
              type="file" 
              onChange={ e => this.handleFileChange(e.target.files) }
              accept="image/*" />
          </Form>
        </div>
        </Card>

        <canvas 
          ref={ this.canvasRef }
          style={ { display: 'none' } }>
        </canvas>  
      </div>
    )
  }
}
