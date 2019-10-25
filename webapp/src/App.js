import React from 'react'

function App(props) {
  return (
    <div className="App">
      <div>
        <input type='text' value={props.citiesStr} placeholder='comma separated cities' />
      </div>
      <div id='data-section' className='data'>
      </div>
    </div>
  )
}

export default App
