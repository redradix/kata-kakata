import React, { useState, useRef } from 'react'
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

const parseData = R.pipe(
  R.groupBy(R.prop('city')),
  R.map(
    R.pipe(
      R.map(R.pick(['attribute', 'timestamp', 'value'])),
      R.map(({ attribute, ...rest }) => [attribute, rest]),
      R.fromPairs,
    ),
  ),
)

const FETCH_INTERVAL = 5000

function App({ attributes }) {
  const [cities, setCities] = useState({})
  const timeoutRef = useRef()

  const handleChange = cities => {
    clearTimeout(timeoutRef.current)

    fetch(getEndpoint(cities, attributes))
      .then(res => res.json())
      .then(data => {
        const parsedData = parseData(data)
        const maxTimestampByCity = R.map(
          R.pipe(
            R.pluck('timestamp'),
            R.values,
            R.apply(Math.max),
            R.objOf('maxTimestamp'),
          ),
        )(parsedData)

        setCities(R.mergeDeepLeft(parsedData, maxTimestampByCity))

        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(
          () => handleChange(cities),
          FETCH_INTERVAL,
        )
      })
  }

  return (
    <div className="App">
      <CitiesInput onChange={handleChange} />
      <CitiesTable cities={cities} attributes={attributes} />
    </div>
  )
}

export default App
