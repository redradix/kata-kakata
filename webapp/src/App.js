import React, { useState, useEffect } from 'react'
import * as R from 'ramda'
import CitiesInput from './components/CitiesInput'
import CitiesTable from './components/CitiesTable'

const API_HOST = 'http://localhost:3001'

const getAPIParam = R.pipe(
  R.xprod,
  R.map(R.join('.')),
  R.join(','),
)

const getEndpoint = (cities, attributes) =>
  `${API_HOST}/${getAPIParam(cities, attributes)}`

function App({ attributes }) {
  const [cities, setCities] = useState([])

  useEffect(() => {
    if (!cities) {
      return
    }

    fetch(getEndpoint(cities, attributes))
      .then(x => x.json())
      .then(console.log)
  }, [cities])

  return (
    <div className="App">
      <CitiesInput onChange={setCities} />
      <CitiesTable cities={cities} />
    </div>
  )
}

export default App
