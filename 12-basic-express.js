const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(port, () => {
  console.log(`Express is running on port ${port}`)
})
