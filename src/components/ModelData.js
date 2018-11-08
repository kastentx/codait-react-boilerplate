import React from 'react'
import { Row, FormText } from 'reactstrap'


const ModelData = props => (
  <div>
    <Row className="midRow">
      { props.modelType ? props.modelType.name : null }
    </Row>
    <Row>
      <FormText>
        { props.modelType ? props.modelType.description : null }
      </FormText>
    </Row>  
  </div>
)

export default ModelData
