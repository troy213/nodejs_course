const express = require('express')
const router = express.Router()

const product = require('../data/product')

//set up api request and send back json data
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: product })
})

router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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

module.exports = router
