import React, { useState } from 'react'

const CitiesInput = ({ onChange }) => {
  const handleChange = ({ target }) => {
    onChange(target.value.split(','))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="comma separated cities"
        onBlur={handleChange}
      />
    </div>
  )
}

export default CitiesInput
