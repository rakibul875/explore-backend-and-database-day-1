const express = require('express')
const app = express()
const port =process.env.PORT ||8000

const user=[
    {id: 1, name:'John',age:30},
    {id: 2, name:'Jane',age:25},
    {id: 3, name:'Bob',age:35},
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello from about section')
})
app.get('/user', (req, res) => {
  res.send(user)
})
app.post('/user', (req, res) => {
  console.log('Post method is working')
  res.send('Post method is working')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})