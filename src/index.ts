import express from 'express'
import serveStatic from 'serve-static'
import basicAuth from 'express-basic-auth'
import cors from 'cors'

const app = express()
const port = process.argv[2] || 4000

app.use(
  cors({
    origin: (_origin, callback) => callback(null, true),
    credentials: true,
    exposedHeaders: ['WWW-Authenticate'],
  }),
)

app.use(
  basicAuth({
    users: { admin: 'password' },
    challenge: true,
    unauthorizedResponse: (req: any) =>
      req.auth ? 'Credentials rejected' : 'No credentials provided',
  }),
)

app.use(serveStatic('public', { index: ['index.html'] }))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
