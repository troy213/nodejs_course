const express = require('express')
const path = require('path')
const app = express()
const port = 5000

const product = require('./data/product')

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/api/product', (req, res) => {
  res.json(product)
})

app.get('/api/product/:id', (req, res) => {
  const newProduct = product.find(
    (product) => product.id === Number(req.params.id)
  )
  if (!newProduct) {
    return res.status(404).send('product not found')
  } else {
    return res.json(newProduct)
  }
})

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
