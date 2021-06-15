const express = require('express')
const path = require('path')
const app = express()
const product = require('./data/product')

app.use(express.static('./public'))

// parse from data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/api', (req, res) => {
  res.json(product)
})

const express = require('express')
const path = require('path')
const app = express()

const product = require('./data/product')

//parse from data and parse json by adding middleware
app.use([
  express.static('./public'),
  express.urlencoded({ extended: false }),
  express.json(),
])

//get request
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

//set up api request and send back json data
app.get('/api', (req, res) => {
  res.status(200).json({ success: true, data: product })
})

app.get('/api/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  let newProduct = product.find((value) => value.id === Number(id))
  if (!newProduct) {
    return res
      .status(404)
      .json({ success: false, msg: `no product with id ${id}` })
  }
  res.status(200).json({ success: true, data: newProduct })
})

// app.post('/api', (req, res) => {
//   const { name } = req.body
//   if (name) {
//     res.status(200).send(`Welcome ${name}`)
//   } else {
//     res.status(401).send('Please Provide Credential')
//   }
// })

//post request
app.post('/api', (req, res) => {
  const name = req.body.name
  if (name) {
    return res.status(201).json({
      success: true,
      data: [...product, name],
    })
  }
  res.status(400).json({ success: false, msg: 'please provide credential' })
})

//put request
app.put('/api/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const findProduct = product.find((value) => value.id === Number(id))
  if (!findProduct) {
    return res
      .status(404)
      .json({ success: false, msg: `no product with id ${id}` })
  }
  const newProduct = product.map((value) => {
    if (value.id === Number(id)) {
      value.name = name
    }
    return value
  })
  res.status(200).json({ success: true, data: newProduct })
})

//delete request
app.delete('/api/:id', (req, res) => {
  const { id } = req.params
  const findProduct = product.find((value) => value.id === Number(id))
  if (!findProduct) {
    return res
      .status(404)
      .json({ success: false, msg: `no product with id ${id}` })
  }
  const newProduct = product.filter((value) => value.id !== Number(id))
  res.status(200).json({ success: true, data: newProduct })
})

//40
app.all('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})

app.post('/api', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  if (name) {
    res.status(201).send(req.body.name)
  } else {
    res.status(401).json({ msg: 'Please Provide Credential' })
  }
})

app.all('*', (req, res) => {
  res.status(404).send(`<h1><a href="/">404 Not Found</a></h1>`)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
})
