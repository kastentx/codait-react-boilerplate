import React from 'react'

const ModelData = props => (
  props.modelType ? 
    <div>
      <h2>
        <span style={ { color: 'darkTurquoise' } }>
          { `MAX Model: `}
        </span> 
        <span style={ { color: 'white' } }>
          { props.modelType.name }
        </span>
      </h2>
      <h4 style={ { color: '#706e6f' } }>
        { props.modelType.description }
      </h4>
    </div>
  :
    <div>  
      <h2>
        {`No MAX Model found running at Port ${ props.modelPort }.`}
      </h2>
      <h4 style={ { color: '#706e6f' } }>
        { `If the model is running on another port, edit the value in ` }
        <code>App.js</code>
        { ` and reload.` }
      </h4>
    </div>  
)

export default ModelData
