const express = require('express')
const util = require('util')
const serveStatic = require('serve-static')
const basicAuth = require('express-basic-auth')
const cors = require('cors')
const app = express()
const port = 4000

app.use(
  cors({
    origin: function (origin, callback) {
      return callback(null, true)
    },
    credentials: true,
  }),
)

app.use(
  basicAuth({
    users: { admin: 'password' },
    challenge: true,
    unauthorizedResponse: req => {
      return req.auth ? 'Credentials rejected' : 'No credentials provided'
    },
  }),
)

app.use(serveStatic('public', { index: ['index.html'] }))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
