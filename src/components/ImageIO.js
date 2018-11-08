import React, { Component } from 'react'
import ImageInput from './ImageInput'
import ImagePreview from './ImagePreview'
import { Row, Col } from 'reactstrap'

export default class ImageIO extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePreview: ''
    }
  }

  render() {
    return (
      <div className="imageIO">
        <Row>
          <Col>
            <ImageInput
              imageSize={ this.props.imageSize }
              handleSubmit={ this.props.handleSubmit }
              renderImagePreview={ this.props.setImageInput } />
          </Col>

          { this.props.imagePreview ? 
            <Col>
              <ImagePreview 
                image={ this.props.imagePreview } />
            </Col>
          :
            null }
        </Row>
      </div>
    )
  }
}
