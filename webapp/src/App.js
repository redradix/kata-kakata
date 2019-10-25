import React, { useState } from 'react'
import Table from './Table'
import * as R from 'ramda'

function App({ attributes }) {
  const [value, setValue] = useState('madrid,paris')

  const getFormData = () => {
    const dataToApi = value.split(',')
    const citiesWithAttrs = R.xprod(dataToApi, attributes)

    const urlParams = citiesWithAttrs.map((cityWithAttrs) => {
      return cityWithAttrs.join('.')
    }).join(',')

    fetch(`http://localhost:3001/${urlParams}`)
      .then((response) => {
        console.log(response.json())
      })
  }

  return (
    <div className="App">
      <div>
        <input type='text' placeholder='comma separated cities' onChange={event => setValue(event.target.value)} />
        <button onClick={getFormData}></button>
      </div>
      <div id='data-section' className='data'>
        <Table data={'hola'} attributes={attributes}></Table>
      </div>
    </div>
  )
}

export default App
