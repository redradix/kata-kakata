import React from 'react'

function App({ attributes }) {

  const heads = [...['city', 'date'], ...attributes]

  return (
    <table>
      <thead>
        <tr>
          {heads.map((head) => <th key={head}>{head}</th>)}
        </tr>
      </thead>
    </table>
  )
}

export default App
