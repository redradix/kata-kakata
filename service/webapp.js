const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const R = require('ramda')

const extractIds = R.pipe(
  R.prop('ids'),
  R.split(',')
)

module.exports = function(app, repo) {

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())
  app.options('*', cors())

  const router = express.Router()

  router.get('/:ids', function(req, res) {
    console.log('/GET => ', req.params)

    const ids = extractIds(req.params)

    repo.getCurrentValues(ids)
      .then(result => res.json(result))
      .catch(error => {
        console.log('get current values failed => ', error)
        res.status(500).json({ error })
      })

    return
  })

  app.use('/', router)
}
