const app = require('express')()
const http = require('http')
const server = http.Server(app)
const makeRepo = require('./repo')
const makeWebapp = require('./webapp')

const repo = makeRepo()
makeWebapp(app, repo)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('listening on *: ' + PORT)
})
