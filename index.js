const express = require('express')
const app = express()
const port =process.env.PORT ||3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello from about section')
})
app.get('/user', (req, res) => {
  res.send('Hello from user section')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})