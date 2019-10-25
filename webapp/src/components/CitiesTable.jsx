import React from 'react'

const CitiesTable = ({ cities }) => {
  return (
    <div id="data-section" className="data">
      <table>
        <tbody>
          {Object.entries(cities).map(([city, values]) => (
            <tr>
              <td>{city}</td>
              <td>TIMESTAMP</td>
              <td>ATTRIBUTE1</td>
              <td>ATTRIBUTE2</td>
              <td>ATTRIBUTE3</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CitiesTable
