const R = require('ramda')

const shouldGenerateNew = () => Boolean(Math.round(Math.random()))

const createValue = id => {
  const [city, attribute] = R.split('.', id)

  return {
    city,
    attribute,
    id,
    timestamp: Date.now(),
    value: Math.random(),
  }
}

const exists = R.complement(R.isNil)

module.exports = () => {
  let _values = {}

  return {
    getCurrentValues,
  }

  function getCurrentValues(ids) {
    return Promise.all(ids.map(getCurrentValue))
  }

  function getCurrentValue(id) {
    const current = R.prop(id, _values)

    if (exists(current) && !shouldGenerateNew()) {
      return Promise.resolve(current)
    }

    const value = createValue(id)
    _values = R.assoc(id, value, _values)
    return Promise.resolve(value)
  }
}
