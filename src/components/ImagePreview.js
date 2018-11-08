import React, { Component } from 'react'

const ImagePreview = props => (
  <div>
    <img src={ props.image.source } />
  </div>
)
export default ImagePreview
