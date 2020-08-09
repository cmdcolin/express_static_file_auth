const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const port = 4000

app.use(cors())

app.use(
  basicAuth({
    users: { admin: 'password' },
    challenge: true,
    unauthorizedResponse: req => {
      return req.auth ? 'Credentials rejected' : 'No credentials provided'
    },
  }),
)

app.use('/', express.static(__dirname + '/public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
