import React from 'react'
import { Row, FormText } from 'reactstrap'


const ModelData = props => (
  props.modelType ? 
    <div>
      <Row className="midRow">
        { props.modelType.name }
      </Row>
      <Row>
        <FormText>
          { props.modelType.description }
        </FormText>
      </Row>  
    </div>
  :
    <div>
      <Row>
        {`No MAX Model found running at Port ${5000444}`}
      </Row>
      <Row>
        <FormText>
          { `If the model is running on another port, edit the value in ` }
          <code>App.js</code>
          { ` and reload.` }
        </FormText>
      </Row>
    </div>  
)

export default ModelData
