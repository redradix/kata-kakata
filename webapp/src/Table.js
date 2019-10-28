import React from 'react'
import * as R from 'ramda'

function App({ data, attributes }) {

  data = data?data:[]

  const heads = [...['city', 'date'], ...attributes]

  return (
    <table>
      <thead>
        <tr>
          {heads.map((head) => <th key={head}>{head}</th>)}
        </tr>
      </thead>
      <tbody> 
        {
          data.map((city, index)=> { 
            var getTimestamps = R.pluck('timestamp')
            const timestamp = new Date(R.max(...getTimestamps(city))).toISOString()

            return <tr key={index}>
              <td>{city[index]['city']}</td>
              <td>{timestamp}</td>
              {
                city.map((attr)=>
                  <td key={attr.id}>{attr.value.toFixed(4)}</td>
                )}
            </tr>
          })}
      </tbody>
    </table>
  )
}

export default App
