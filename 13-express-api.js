const express = require('express')
const path = require('path')
const app = express()
const port = 5000

//fetch local data product object
const product = require('./data/product')

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

//learn how to send json data
app.get('/api/product', (req, res) => {
  res.json(product)
})

//learn how to use route-param (req.params)
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

//learn how to use req.query (search basic)
app.get('/api/search', (req, res) => {
  const { query, limit } = req.query
  let newProduct = [...product]

  if (query) {
    newProduct = newProduct.filter((value) => {
      return value.name.startsWith(query)
    })
  }
  if (limit) {
    newProduct = newProduct.slice(0, Number(limit))
  }
  if (newProduct.length < 1) {
    return res.status(200).json({ success: true, data: [] })
  }
  res.json(newProduct)
})

//show 404 not found page if the request is unknown
app.all('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
