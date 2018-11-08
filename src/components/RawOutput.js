import React from 'react'

const RawOutput = props => (
  <div className='rawOutput'>
    <code>
      <h2 style={ { display: 'inline' } }>{ `Raw Output: ` }</h2>
      { JSON.stringify(props.data) }
    </code>
  </div>
)

export default RawOutput
