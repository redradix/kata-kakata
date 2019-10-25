import React from 'react'

const CitiesTable = ({ cities, attributes }) => {
  return (
    <div id="data-section" className="data">
      <table>
        <thead>
          <th>City</th>
          <th>Timestamp</th>
          {attributes.map(x => (
            <th>{x}</th>
          ))}
        </thead>
        <tbody>
          {Object.entries(cities).map(([city, values]) => (
            <tr>
              <td>{city}</td>
              <td>{new Date(values.maxTimestamp).toISOString()}</td>
              {attributes.map(x => (
                <td>{values[x].value.toFixed(3)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CitiesTable
