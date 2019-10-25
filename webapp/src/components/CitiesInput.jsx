import React, { useState } from 'react'

const CitiesInput = ({ onChange }) => {
  const [input, setInput] = useState('')

  const handleChange = ({ target }) => {
    const text = target.value

    setInput(text)
    onChange(text.split(','))
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="comma separated cities"
        onChange={handleChange}
      />
    </div>
  )
}

export default CitiesInput
