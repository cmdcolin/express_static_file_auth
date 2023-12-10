# express static file auth

A basic example of an express.js server that actually enables CORS
authorization and accepts credentials from anyone. This is not necessarily what
is recommended by CORS but it helps in simple debugging scenarios where you
want to request access to this resource on port 4000 from your CRA on port 3000

See this thread for more details
https://stackoverflow.com/questions/19743396/cors-cannot-use-wildcard-in-access-control-allow-origin-when-credentials-flag-i

## Usage

```
git clone repo
yarn
node index.js <port>
```

Starts on port 4000 or <port>
