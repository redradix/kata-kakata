import React, { useState } from 'react'
import Table from './Table'
import * as R from 'ramda'

function App({ attributes }) {
  const [value, setValue] = useState(null)
  const [data, setData] = useState(null)

  const start = () => {
    getFormData();
    let timer = setInterval(() => getFormData(), 5000);
  }

  const getFormData = () => {
    const dataToApi = value.split(',')
    const citiesWithAttrs = R.xprod(dataToApi, attributes)
    const urlParams = citiesWithAttrs.map((cityWithAttrs) => {
      return cityWithAttrs.join('.')
    }).join(',')

    fetch(`http://localhost:3001/${urlParams}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        let cityArray = R.values(R.groupBy(R.prop('city'),data))
        setData(cityArray)
      })
  }

  return (
    <div className="App">
      <div>
        <input type='text' placeholder='comma separated cities' onChange={event => setValue(event.target.value)} />
        <button onClick={start}>TEST</button>
      </div>
      <div id='data-section' className='data'>
        <Table data={data} attributes={attributes}></Table>
      </div>
    </div>
  )
}

export default App
