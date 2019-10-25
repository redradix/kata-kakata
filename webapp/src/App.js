import React, { useState } from 'react'
import CitiesInput from './components/CitiesInput'
import CitiesTable from './components/CitiesTable'

function App({ attributes }) {
  const [cities, setCities] = useState([])

  return (
    <div className="App">
      <CitiesInput onChange={setCities} />
      <CitiesTable cities={cities} />
    </div>
  )
}

export default App
