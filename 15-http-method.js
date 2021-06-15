const express = require('express')
const path = require('path')
const app = express()

const productAPI = require('./routes/product-api')

//parse from data and parse json by adding middleware
app.use([
  express.static('./public'),
  express.urlencoded({ extended: false }),
  express.json(),
])

app.use('/api', productAPI)

//get request
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

//send back 404 status code if the request is unknown
app.all('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})
