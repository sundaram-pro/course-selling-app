const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('me/', (req, res) => {
  // route for getting current user info
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})