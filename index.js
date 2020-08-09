const express = require('express')
const basicAuth = require('express-basic-auth')
const util = require('util')
const app = express()
const port = 4000

app.use(
  basicAuth({
    users: { admin: 'password' },
    challenge: true,
    unauthorizedResponse: getUnauthorizedResponse,
  }),
)

function getUnauthorizedResponse(req) {
  return req.auth
    ? 'Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected'
    : 'No credentials provided'
}

app.use('/', express.static(__dirname + '/public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// var staticMiddleware = express.static(__dirname + '/private')

// app.get('/private/:file', function (req, res, next) {
//   console.log('about to send restricted file ' + req.params.file)
//   staticMiddleware(req, res, next)
// })
// var app = express.createServer();

// app.configure(function () {
//   app.use(app.router);
//   app.use(express.logger("dev"));
// });

// app.get("/private/:file", function (req, res, next) {
//   console.log("about to send restricted file " + req.params.file);
//   staticMiddleware(req, res, next);
// });
// app.listen(16000);
